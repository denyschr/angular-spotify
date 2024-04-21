import { Injectable } from '@angular/core';
import { ApiService } from '.';
import { AlbumsResponse } from '../models';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumService {
  constructor(private _apiService: ApiService) {}

  public getAlbum(id: string): Observable<AlbumsResponse> {
    return this._apiService.sendRequest<AlbumsResponse>(`${environment.apiUrl}/albums/${id}`);
  }
}
