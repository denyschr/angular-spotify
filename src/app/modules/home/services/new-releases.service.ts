import { Injectable, inject } from '@angular/core';
import { ApiService } from '@services';
import { Album, AlbumsResponse } from '@models';
import { MEDIA_ITEM_LIMIT } from '@constants';
import { environment } from '@environment';
import { HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class NewReleasesService {
  private readonly _apiService = inject(ApiService);

  public getNewReleases(): Observable<Album[]> {
    const params = new HttpParams().set('limit', MEDIA_ITEM_LIMIT);

    return this._apiService
      .sendRequest<AlbumsResponse>(`${environment.apiUrl}/browse/new-releases`, params)
      .pipe(map((res) => res.albums.items));
  }
}
