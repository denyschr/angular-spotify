import { Injectable } from '@angular/core';
import { Artist } from '@models';
import { SpotifyConfig } from '@environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArtistService {
  constructor(private _http: HttpClient) {}

  public getArtist(id: string): Observable<Artist> {
    return this._http.get<Artist>(`${SpotifyConfig.apiUrl}/artists/${id}`);
  }
}
