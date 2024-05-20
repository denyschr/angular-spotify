import { Injectable, inject } from '@angular/core';
import { ApiService } from '@services';
import { MediaType, SearchResponse, SearchResults, SearchResultsArray } from '@models';
import { MAX_FETCH_CONTENT } from '@constants';
import { environment } from '@environment';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { objectToValues } from '@utils';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly _apiService = inject(ApiService);
  private readonly _router = inject(Router);

  private readonly _searchTermSubject = new BehaviorSubject<string>('');
  private readonly _searchTypeSubject = new BehaviorSubject<MediaType>(MediaType.All);
  private readonly _searchMediaTypesSubject = new BehaviorSubject<MediaType[]>([]);
  private readonly _paginationSubject = new BehaviorSubject<number>(0);

  public readonly searchTerm$ = this._searchTermSubject.asObservable();
  public readonly searchType$ = this._searchTypeSubject.asObservable();
  public readonly mediaTypes$ = this._searchMediaTypesSubject.asObservable();
  public readonly pagination$ = this._paginationSubject.asObservable();

  public search(term: string, offset: number): Observable<SearchResponse> {
    const params = new HttpParams()
      .set('q', term)
      .set('type', 'album,artist,playlist,track')
      .set('limit', MAX_FETCH_CONTENT)
      .set('offset', offset);

    return this._apiService.sendRequest<SearchResults>(`${environment.apiUrl}/search`, params).pipe(
      map((res) => ({
        results: this.formatResults(res),
        totalResults: this.calcTotalResults(res),
        mediaTypes: this.extractMediaTypes(res)
      }))
    );
  }

  private formatResults(res: SearchResults): SearchResultsArray {
    return {
      albums: res.albums.items,
      artists: res.artists.items,
      tracks: res.tracks.items,
      playlists: res.playlists.items
    };
  }

  private calcTotalResults(res: SearchResults): number {
    return objectToValues(res).reduce((total, searchResult) => {
      total += searchResult.total;
      return total;
    }, 0);
  }

  private extractMediaTypes(res: SearchResults): MediaType[] {
    return objectToValues(res).reduce(
      (mediaTypes: MediaType[], searchResult) => {
        const mediaType = searchResult.items[0]?.type;
        if (mediaType) {
          mediaTypes.push(`${mediaType}s` as MediaType);
        }
        return mediaTypes;
      },
      [MediaType.All]
    );
  }

  public setSearchTerm(term: string): void {
    this._searchTermSubject.next(term);
  }

  public setSearchType(type: MediaType): void {
    this._searchTypeSubject.next(type);
  }

  public nextPage(page: number): void {
    this._paginationSubject.next(this._paginationSubject.value + page);
  }

  public resetPage(): void {
    this._paginationSubject.next(0);
  }

  public updateQueryParams(): void {
    const params = new Map<string, string | MediaType>();
    const term = this._searchTermSubject.value;
    const type = this._searchTypeSubject.value;

    if (term) {
      params.set('term', term);
    }
    if (type !== MediaType.All) {
      params.set('type', type);
    }

    this._router.navigate([], {
      queryParams: { term: params.get('term'), type: params.get('type') },
      replaceUrl: true,
      queryParamsHandling: 'merge'
    });
  }
}
