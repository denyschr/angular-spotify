import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  public getAccessToken(): string {
    return window.localStorage['access_token'];
  }

  public saveAccessToken(token: string): void {
    window.localStorage['access_token'] = token;
  }

  public destroyAccessToken(): void {
    window.localStorage.removeItem('access_token');
  }

  public getRefreshToken(): string {
    return window.localStorage['refresh_token'];
  }

  public saveRefreshToken(token: string): void {
    window.localStorage['refresh_token'] = token;
  }

  public destroyRefreshToken(): void {
    window.localStorage.removeItem('refresh_token');
  }

  public clearStorage(): void {
    window.localStorage.clear();
  }
}
