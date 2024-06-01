import { Injectable, inject } from '@angular/core';
import { ArtistsResponse } from '@models';
import { SpotifyConfig } from '@environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArtistService {
  private readonly _http = inject(HttpClient);

  public getArtist(id: string): Observable<ArtistsResponse> {
    return this._http.get<ArtistsResponse>(`${SpotifyConfig.apiUrl}/artists/${id}`);
  }
}
