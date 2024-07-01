import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpotifyConfig } from '@environment';
import { JwtService } from './jwt.service';
import { ApiToken } from '@models';
import { generateRandomString } from '@utils';
import shajs from 'sha.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _clientId: string = import.meta.env['NG_APP_CLIENT_ID'];
  private readonly _headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  constructor(
    private _http: HttpClient,
    private _jwtService: JwtService
  ) {}

  public getAuthUrl(): string {
    const codeVerifier = generateRandomString(64);
    const hashed = shajs('sha256').update(codeVerifier).digest().toString('base64');
    const codeChallenge = hashed.replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
    window.localStorage.setItem('code_verifier', codeVerifier);
    const params = {
      response_type: 'code',
      client_id: this._clientId,
      scope: SpotifyConfig.scopes.join(' '),
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: SpotifyConfig.redirectUrl
    };
    const paramString = new HttpParams({ fromObject: params }).toString();
    return `${SpotifyConfig.authEndPoint}?${paramString}`;
  }

  public generateToken(code: string): Observable<ApiToken> {
    const codeVerifier = localStorage.getItem('code_verifier')!;
    const body = new URLSearchParams({
      client_id: this._clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: SpotifyConfig.redirectUrl,
      code_verifier: codeVerifier
    });
    return this._http.post<ApiToken>(SpotifyConfig.tokenUrl, body, { headers: this._headers });
  }

  public refreshToken(): Observable<ApiToken> {
    const refreshToken = this._jwtService.getRefreshToken();
    this._jwtService.destroyAccessToken();
    const body = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: this._clientId
    });
    return this._http.post<ApiToken>(SpotifyConfig.tokenUrl, body, { headers: this._headers });
  }
}
