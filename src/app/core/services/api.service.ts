import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiToken } from '../models';

@Injectable()
export class ApiService {
  private readonly _clientId: string = import.meta.env['NG_APP_CLIENT_ID'];
  private readonly _clientSecret: string = import.meta.env['NG_APP_CLIENT_SECRET'];

  constructor(private _http: HttpClient) {}

  private _getToken(): Observable<ApiToken> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${this._clientId}:${this._clientSecret}`)
    });

    const body = new URLSearchParams({ grant_type: 'client_credentials' });

    return this._http.post<ApiToken>(environment.tokenUrl, body, { headers });
  }

  public sendRequest<TObservable>(url: string, params?: HttpParams): Observable<TObservable> {
    return this._getToken().pipe(
      switchMap((response: ApiToken) => {
        const token = response.access_token;

        const headers = new HttpHeaders({
          Authorization: 'Bearer ' + token
        });

        return this._http.get<TObservable>(url, { headers, params });
      })
    );
  }
}
