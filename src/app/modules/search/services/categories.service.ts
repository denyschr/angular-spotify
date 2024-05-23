import { Injectable, inject } from '@angular/core';
import { ApiService } from '@services';
import { CategoriesResponse, Category } from '@models';
import { environment } from '@environment';
import { HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class CategoriesService {
  private readonly _apiService = inject(ApiService);

  public getCategories(): Observable<Category[]> {
    const params = new HttpParams().set('limit', 50);

    return this._apiService
      .sendRequest<CategoriesResponse>(`${environment.apiUrl}/browse/categories`, params)
      .pipe(map((res) => res.categories.items));
  }
}
