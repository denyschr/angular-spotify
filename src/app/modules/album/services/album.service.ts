import { Injectable, inject } from '@angular/core';
import { ApiService } from '@services';
import { AlbumsResponse } from '@models';
import { environment } from '@environment';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumService {
  private readonly _apiService = inject(ApiService);

  public getAlbum(id: string): Observable<AlbumsResponse> {
    return this._apiService.sendRequest<AlbumsResponse>(`${environment.apiUrl}/albums/${id}`);
  }
}
