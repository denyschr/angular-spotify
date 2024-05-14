import { Injectable, inject } from '@angular/core';
import { ApiService } from '@services';
import { CategoriesResponse } from '@models';
import { environment } from '@environment';
import { CATEGORIES_LIMIT } from '@constants';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesService {
  private readonly _apiService = inject(ApiService);

  public getCategories(): Observable<CategoriesResponse> {
    const params = new HttpParams().set('limit', CATEGORIES_LIMIT);

    return this._apiService.sendRequest<CategoriesResponse>(`${environment.apiUrl}/browse/categories`, params);
  }
}
