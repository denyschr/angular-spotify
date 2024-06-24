import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SpotifyConfig } from '@environment';
import { UserProfile } from '@models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly _http = inject(HttpClient);

  public getUserProfile(): Observable<UserProfile> {
    return this._http.get<UserProfile>(`${SpotifyConfig.apiUrl}/me`);
  }
}
