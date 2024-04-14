import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services';
import { AlbumsResponse } from '../models';
import { ITEM_LIMIT } from '../constants/app.constants';
import { environment } from '../../../environments/environment';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class NewReleasesService {
  constructor(private _apiService: ApiService) {}

  public getNewReleases() {
    const params = new HttpParams().set('limit', ITEM_LIMIT);

    return this._apiService.sendRequest<AlbumsResponse>(`${environment.apiUrl}/browse/new-releases`, params);
  }
}
