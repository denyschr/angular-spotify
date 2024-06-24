import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MAX_FETCH_CONTENT } from '@constants';
import { SpotifyConfig } from '@environment';
import {
  Artist,
  RecentPlayedTracks,
  Track,
  UserProfile,
  UserTopArtists,
  UserTopTracks
} from '@models';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly _http = inject(HttpClient);

  public getUserProfile(): Observable<UserProfile> {
    return this._http.get<UserProfile>(`${SpotifyConfig.apiUrl}/me`);
  }

  public getRecentPlayedTracks(): Observable<Track[]> {
    const params = { limit: MAX_FETCH_CONTENT };
    return this._http
      .get<RecentPlayedTracks>(`${SpotifyConfig.apiUrl}/me/player/recently-played`, { params })
      .pipe(map(res => res.items.map(item => item.track)));
  }

  public getUserTopArtists(): Observable<Artist[]> {
    const params = { limit: MAX_FETCH_CONTENT };
    return this._http
      .get<UserTopArtists>(`${SpotifyConfig.apiUrl}/me/top/artists`, { params })
      .pipe(map(res => res.items));
  }

  public getUserTopTracks(): Observable<Track[]> {
    const params = { limit: MAX_FETCH_CONTENT };
    return this._http
      .get<UserTopTracks>(`${SpotifyConfig.apiUrl}/me/top/tracks`, { params })
      .pipe(map(res => res.items));
  }
}
