import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services';
import { ArtistsResponse } from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class ArtistService {
  constructor(private _apiService: ApiService) {}

  public getArtist(id: string) {
    return this._apiService.getRequest<ArtistsResponse>(`${environment.baseUrl}/artists/${id}`);
  }
}
