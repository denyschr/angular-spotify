import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpotifyConfig } from '@environment';
import { Track } from '@models';
import { Observable } from 'rxjs';

@Injectable()
export class TrackService {
  constructor(private _http: HttpClient) {}

  public getTrack(id: string): Observable<Track> {
    return this._http.get<Track>(`${SpotifyConfig.apiUrl}/tracks/${id}`);
  }
}
