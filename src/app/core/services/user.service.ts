import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MAX_FETCH_CONTENT } from '@constants';
import { SpotifyConfig } from '@environment';
import {
  Album,
  Artist,
  RecentPlayedTracks,
  Track,
  UserProfile,
  UserSavedAlbums,
  UserTopArtists,
  UserTopTracks
} from '@models';
import { Observable, map } from 'rxjs';
import { JwtService } from './jwt.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private _http: HttpClient,
    private _jwtService: JwtService,
    private _router: Router
  ) {}

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

  public getUserSavedAlbums(): Observable<Album[]> {
    const params = { limit: MAX_FETCH_CONTENT };
    return this._http
      .get<UserSavedAlbums>(`${SpotifyConfig.apiUrl}/me/albums`, { params })
      .pipe(map(res => res.items.map(item => item.album)));
  }

  public logout(): void {
    this._jwtService.clearStorage();
    this._router.navigateByUrl('/login');
  }
}
