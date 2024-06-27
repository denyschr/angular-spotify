import { Injectable } from '@angular/core';
import { Album } from '@models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SpotifyConfig } from '@environment';

@Injectable()
export class AlbumService {
  constructor(private _http: HttpClient) {}

  public getAlbum(id: string): Observable<Album> {
    return this._http.get<Album>(`${SpotifyConfig.apiUrl}/albums/${id}`);
  }
}
