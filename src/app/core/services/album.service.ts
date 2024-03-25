import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services';
import { AlbumsResponse } from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class AlbumService {
  constructor(private _apiService: ApiService) {}

  public getAlbum(id: string) {
    return this._apiService.getRequest<AlbumsResponse>(`${environment.baseUrl}/albums/${id}`);
  }
}
