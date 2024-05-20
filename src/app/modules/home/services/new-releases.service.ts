import { Injectable, inject } from '@angular/core';
import { ApiService } from '@services';
import { Album, AlbumsResponse } from '@models';
import { MAX_FETCH_CONTENT } from '@constants';
import { environment } from '@environment';
import { HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class NewReleasesService {
  private readonly _apiService = inject(ApiService);

  public getNewReleases(): Observable<Album[]> {
    const params = new HttpParams().set('limit', MAX_FETCH_CONTENT);

    return this._apiService
      .sendRequest<AlbumsResponse>(`${environment.apiUrl}/browse/new-releases`, params)
      .pipe(map((res) => res.albums.items));
  }
}
