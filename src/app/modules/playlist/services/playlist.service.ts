import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpotifyConfig } from '@environment';
import { Playlist } from '@models';
import { Observable } from 'rxjs';

@Injectable()
export class PlaylistService {
  constructor(private _http: HttpClient) {}

  public getPlaylist(id: string): Observable<Playlist> {
    return this._http.get<Playlist>(`${SpotifyConfig.apiUrl}/playlists/${id}`);
  }
}
