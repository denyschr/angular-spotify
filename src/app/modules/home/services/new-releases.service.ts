import { Injectable } from '@angular/core';
import { ApiService } from '@services';
import { AlbumsResponse } from '@models';
import { MEDIA_ITEM_LIMIT } from '@constants';
import { environment } from '@environment';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewReleasesService {
  constructor(private _apiService: ApiService) {}

  public getNewReleases(): Observable<AlbumsResponse> {
    const params = new HttpParams().set('limit', MEDIA_ITEM_LIMIT);

    return this._apiService.sendRequest<AlbumsResponse>(`${environment.apiUrl}/browse/new-releases`, params);
  }
}
