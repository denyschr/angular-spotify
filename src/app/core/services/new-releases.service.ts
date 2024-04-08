import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services';
import { AlbumsResponse } from '../models';
import { ITEM_LIMIT } from '../constants/app.constants';
import { environment } from '../../../environments/environment';

@Injectable()
export class NewReleasesService {
  constructor(private _apiService: ApiService) {}

  public getNewReleases() {
    return this._apiService.getRequest<AlbumsResponse>(`${environment.apiUrl}/browse/new-releases`, ITEM_LIMIT);
  }
}
