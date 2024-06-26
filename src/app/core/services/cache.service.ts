import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CACHE_EXPIRATION } from '@constants';
import { CacheEntry } from '@models';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private _cache = new Map<string, CacheEntry>();

  public get(url: string): HttpResponse<unknown> | null {
    const cached = this._cache.get(url);
    if (!cached) {
      return null;
    }
    const hasExpired = new Date().getTime() >= cached.expiresIn.getTime();
    if (hasExpired) {
      this._cache.delete(url);
      return null;
    }
    return cached.response;
  }

  public set(url: string, response: HttpResponse<unknown>): void {
    const expiresIn = new Date();
    expiresIn.setSeconds(expiresIn.getSeconds() + CACHE_EXPIRATION);
    this._cache.set(url, { expiresIn, response });
  }
}
