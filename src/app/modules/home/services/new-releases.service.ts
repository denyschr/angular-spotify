import { Injectable, inject } from '@angular/core';
import { Album, AlbumsResponse } from '@models';
import { MAX_FETCH_CONTENT } from '@constants';
import { SpotifyConfig } from '@environment';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewReleasesService {
  private readonly _http = inject(HttpClient);

  public getNewReleases(): Observable<Album[]> {
    const params = { limit: MAX_FETCH_CONTENT };
    return this._http
      .get<AlbumsResponse>(`${SpotifyConfig.apiUrl}/browse/new-releases`, { params })
      .pipe(map(res => res.albums.items));
  }
}
