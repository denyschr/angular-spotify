import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  public getToken(): string {
    return window.localStorage['access_token'];
  }

  public saveToken(token: string): void {
    window.localStorage['access_token'] = token;
  }

  public destroyToken(): void {
    window.localStorage.removeItem('access_token');
  }
}
