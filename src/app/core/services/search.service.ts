import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services';
import { SearchResponse } from '../models';
import { ITEM_LIMIT } from '../constants/app.constants';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class SearchService {
  constructor(private _apiService: ApiService) {}

  public search(term: string): Observable<SearchResponse | null> {
    const params = new HttpParams().set('q', term).set('type', 'album,artist,playlist,track').set('limit', ITEM_LIMIT);

    return this._apiService
      .sendRequest<Omit<SearchResponse, 'searchResults' | 'mediaTypes'>>(`${environment.apiUrl}/search`, params)
      .pipe(
        map((res) => {
          const mediaTypes = ['all'];
          const totalResults =
            (res.albums?.total ?? 0) +
            (res.artists?.total ?? 0) +
            (res.playlists?.total ?? 0) +
            (res.tracks?.total ?? 0);

          Object.values(res).forEach((searchResponseItem) => {
            if (searchResponseItem.total) {
              const mediaType = `${searchResponseItem.items[0]?.type}s`;
              mediaTypes.push(mediaType);
            }
          });

          return { ...res, searchResults: totalResults, mediaTypes };
        })
      );
  }
}
