import { Injectable, inject } from '@angular/core';
import { ApiService } from '@services';
import { Albums, Artists, MediaType, Playlists, SearchResponse, Tracks } from '@models';
import { MEDIA_ITEM_LIMIT } from '@constants';
import { environment } from '@environment';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly _apiService = inject(ApiService);
  private readonly _router = inject(Router);
  private readonly _searchTermSubject = new BehaviorSubject<string>('');
  private readonly _searchTypeSubject = new BehaviorSubject<MediaType>(MediaType.All);
  private readonly _paginationSubject = new BehaviorSubject<{ page: number; hasMore: boolean }>({
    page: 0,
    hasMore: true
  });
  public readonly searchTerm$ = this._searchTermSubject.asObservable();
  public readonly searchType$ = this._searchTypeSubject.asObservable();
  public readonly pagination$ = this._paginationSubject.asObservable();

  public searchFormControl = new FormControl<string | null>('');

  public search(term: string, offset = 0): Observable<SearchResponse> {
    const params = new HttpParams()
      .set('q', term)
      .set('type', 'album,artist,playlist,track')
      .set('limit', MEDIA_ITEM_LIMIT)
      .set('offset', offset);

    return this._apiService
      .sendRequest<{
        albums: Albums;
        artists: Artists;
        tracks: Tracks;
        playlists: Playlists;
      }>(`${environment.apiUrl}/search`, params)
      .pipe(
        map((res) => {
          const results = {
            albums: res.albums.items,
            artists: res.artists.items,
            tracks: res.tracks.items,
            playlists: res.playlists.items
          };

          const totalResults = Object.values(res).reduce((total, searchResult) => {
            total += searchResult.total;
            return total;
          }, 0);

          const mediaTypes = Object.values(res).reduce(
            (types, searchResult) => {
              const mediaType = searchResult.items[0]?.type;
              if (searchResult.total && mediaType) {
                types.push(`${mediaType}s` as MediaType);
              }
              return types;
            },
            [MediaType.All]
          );

          return { results, totalResults, mediaTypes };
        })
      );
  }

  public setSearchTerm(term: string): void {
    this._searchTermSubject.next(term);
  }

  public setSearchType(type: MediaType): void {
    this._searchTypeSubject.next(type);
  }

  public incrementPageNumber(reset = false): void {
    this._paginationSubject.next({
      page: reset ? (this._paginationSubject.value.page = 0) : this._paginationSubject.value.page + 29,
      hasMore: true
    });
  }

  public syncRouteParams(): void {
    const term = this._searchTermSubject.value;
    const type = this._searchTypeSubject.value;
    if (term) {
      this._router.navigate(['/search', term, type]);
    } else {
      this._router.navigate(['/search']);
    }
  }
}
