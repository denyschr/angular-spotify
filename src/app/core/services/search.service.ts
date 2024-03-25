import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services';
import { SearchResponse } from '../models';
import { ITEM_LIMIT } from '../constants/app.constants';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';

@Injectable()
export class SearchService {
  constructor(private _apiService: ApiService) {}

  public search(term: string): Observable<SearchResponse | null> {
    return this._apiService
      .getRequest<SearchResponse>(`${environment.baseUrl}/search?q=${term}&type=album%2Cartist&limit=${ITEM_LIMIT}`)
      .pipe(
        map((res) => {
          const totalResults = res.albums.total + res.artists.total;

          return { ...res, searchResults: totalResults };
        })
      );
  }
}
