import { Injectable } from '@angular/core';
import { ApiService } from '@services';
import { ArtistsResponse } from '@models';
import { environment } from '@environment';
import { Observable } from 'rxjs';

@Injectable()
export class ArtistService {
  constructor(private _apiService: ApiService) {}

  public getArtist(id: string): Observable<ArtistsResponse> {
    return this._apiService.sendRequest<ArtistsResponse>(`${environment.apiUrl}/artists/${id}`);
  }
}
