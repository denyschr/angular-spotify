import { Injectable } from '@angular/core';
import { ApiService } from '@services';
import { MediaItemType, MediaType, SearchResponse } from '@models';
import { MEDIA_ITEM_LIMIT } from '@constants';
import { environment } from '@environment';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class SearchService {
  private _searchTermSubject = new BehaviorSubject<string>('');
  private _searchTypeSubject = new BehaviorSubject<MediaType>(MediaType.All);

  constructor(
    private _apiService: ApiService,
    private _router: Router
  ) {}

  public search(term: string): Observable<SearchResponse | null> {
    const params = new HttpParams()
      .set('q', term)
      .set('type', `${MediaItemType.Album},${MediaItemType.Artist},${MediaItemType.Playlist},${MediaItemType.Track}`)
      .set('limit', MEDIA_ITEM_LIMIT);

    return this._apiService
      .sendRequest<Omit<SearchResponse, 'searchResults' | 'mediaTypes'>>(`${environment.apiUrl}/search`, params)
      .pipe(
        map((response) => {
          const totalResults =
            (response.albums?.total ?? 0) +
            (response.artists?.total ?? 0) +
            (response.playlists?.total ?? 0) +
            (response.tracks?.total ?? 0);

          const mediaTypes = Object.values(response).reduce(
            (types, mediaItem) => {
              const type = mediaItem.items[0]?.type;
              if (mediaItem.total && type) {
                types.push(this._generateMediaType(type));
              }
              return types;
            },
            [MediaType.All]
          );

          return { ...response, searchResults: totalResults, mediaTypes };
        })
      );
  }

  private _generateMediaType(mediaItemType: MediaItemType): MediaType {
    switch (mediaItemType) {
      case MediaItemType.Album:
        return MediaType.Albums;
      case MediaItemType.Artist:
        return MediaType.Artists;
      case MediaItemType.Playlist:
        return MediaType.Playlists;
      case MediaItemType.Track:
        return MediaType.Tracks;
    }
  }

  public setSearchTerm(term: string): void {
    this._searchTermSubject.next(term);
  }

  public getSearchTerm(): Observable<string> {
    return this._searchTermSubject.asObservable();
  }

  public setSearchType(type: MediaType): void {
    this._searchTypeSubject.next(type);
  }

  public getSearchType(): Observable<MediaType> {
    return this._searchTypeSubject.asObservable();
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
