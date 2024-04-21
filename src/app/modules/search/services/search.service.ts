import { Injectable } from '@angular/core';
import { ApiService } from '@services';
import { SearchResponse } from '@models';
import { MEDIA_ITEM_LIMIT } from '@constants';
import { environment } from '@environment';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class SearchService {
  public _searchTermSubject = new BehaviorSubject<string>('');
  private _searchTypeSubject = new BehaviorSubject<string>('all');

  constructor(private _apiService: ApiService) {}

  public search(term: string): Observable<SearchResponse | null> {
    const params = new HttpParams()
      .set('q', term)
      .set('type', 'album,artist,playlist,track')
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
            (arr, responseItem) => {
              if (responseItem.total) {
                const mediaType = `${responseItem.items[0]?.type}s`;
                arr.push(mediaType);
              }
              return arr;
            },
            ['all']
          );

          return { ...response, searchResults: totalResults, mediaTypes };
        })
      );
  }

  public setSearchTerm(term: string): void {
    this._searchTermSubject.next(term);
  }

  public getSearchTerm(): Observable<string> {
    return this._searchTermSubject.asObservable();
  }

  public setSearchType(type: string): void {
    this._searchTypeSubject.next(type);
  }

  public getSearchType(): Observable<string> {
    return this._searchTypeSubject.asObservable();
  }
}
