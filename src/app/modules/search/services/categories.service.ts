import { Injectable } from '@angular/core';
import { CategoriesResponse, Category } from '@models';
import { SpotifyConfig } from '@environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class CategoriesService {
  constructor(private _http: HttpClient) {}

  public getCategories(): Observable<Category[]> {
    const params = { limit: 50 };
    return this._http
      .get<CategoriesResponse>(`${SpotifyConfig.apiUrl}/browse/categories`, { params })
      .pipe(map(res => res.categories.items));
  }
}
