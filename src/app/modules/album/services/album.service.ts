import { Injectable } from '@angular/core';
import { AlbumsResponse } from '@models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SpotifyConfig } from '@environment';

@Injectable()
export class AlbumService {
  constructor(private _http: HttpClient) {}

  public getAlbum(id: string): Observable<AlbumsResponse> {
    return this._http.get<AlbumsResponse>(`${SpotifyConfig.apiUrl}/albums/${id}`);
  }
}
