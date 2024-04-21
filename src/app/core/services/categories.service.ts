import { Injectable } from '@angular/core';
import { ApiService } from '.';
import { CategoriesResponse } from '../models';
import { environment } from '../../../environments/environment';
import { HttpParams } from '@angular/common/http';
import { CATEGORIES_LIMIT } from '../constants/app.constants';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesService {
  constructor(private _apiService: ApiService) {}

  public getCategories(): Observable<CategoriesResponse> {
    const params = new HttpParams().set('limit', CATEGORIES_LIMIT);

    return this._apiService.sendRequest<CategoriesResponse>(`${environment.apiUrl}/browse/categories`, params);
  }
}
