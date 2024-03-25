import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Token } from '../../core/models';

@Injectable()
export class ApiService {
  private readonly _clientId: string = import.meta.env['NG_APP_CLIENT_ID'];
  private readonly _clientSecret: string = import.meta.env['NG_APP_CLIENT_SECRET'];

  constructor(private _http: HttpClient) {}

  private getToken() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${this._clientId}:${this._clientSecret}`)
    });

    const body = new URLSearchParams({ grant_type: 'client_credentials' });

    return this._http.post<Token>(environment.tokenUrl, body, { headers });
  }

  public getRequest<T>(url: string, limit?: number) {
    return this.getToken().pipe(
      switchMap((data: Token) => {
        const token = data.access_token;

        const headers = new HttpHeaders({
          Authorization: 'Bearer ' + token
        });

        return this._http.get<T>(limit ? url + `?limit=${limit}` : url, { headers });
      })
    );
  }
}
