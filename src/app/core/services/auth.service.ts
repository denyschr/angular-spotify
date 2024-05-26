import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyConfig } from '@environment';
import { JwtService } from './jwt.service';
import { ApiToken } from '@core/models';
import shajs from 'sha.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _clientId: string = import.meta.env['NG_APP_CLIENT_ID'];
  private readonly _router = inject(Router);
  private readonly _http = inject(HttpClient);
  private readonly _jwtService = inject(JwtService);

  private generateRandomString(length: number): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], '');
  }

  public getAuthUrl(): string {
    const codeVerifier = this.generateRandomString(64);
    const hashed = shajs('sha256').update(codeVerifier).digest().toString('base64');
    const codeChallenge = hashed.replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');

    window.localStorage.setItem('code_verifier', codeVerifier);

    const params = {
      response_type: 'code',
      client_id: this._clientId,
      scope: SpotifyConfig.scopes,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: SpotifyConfig.redirectUri
    };

    const paramString = new HttpParams({ fromObject: params }).toString();
    const authUrl = `${SpotifyConfig.authEndPoint}?` + paramString;
    return authUrl;
  }

  public generateToken(code: string): Observable<ApiToken> {
    const codeVerifier = localStorage.getItem('code_verifier') as string;

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams({
      client_id: this._clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: SpotifyConfig.redirectUri,
      code_verifier: codeVerifier
    });

    return this._http.post<ApiToken>(SpotifyConfig.tokenUrl, body, { headers });
  }

  public logout(): void {
    this._jwtService.destroyToken();
    this._router.navigate(['/login']);
  }
}
