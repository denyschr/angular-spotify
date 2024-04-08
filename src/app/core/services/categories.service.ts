import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services';
import { CategoriesResponse } from '../models';
import { CATEGORIES_LIMIT } from '../constants/app.constants';
import { environment } from '../../../environments/environment';

@Injectable()
export class CategoriesService {
  constructor(private _apiService: ApiService) {}

  public getCategories() {
    return this._apiService.getRequest<CategoriesResponse>(`${environment.apiUrl}/browse/categories`, CATEGORIES_LIMIT);
  }
}
