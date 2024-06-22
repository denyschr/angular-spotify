import { HttpResponse } from '@angular/common/http';

export interface CacheEntry {
  expiresIn: Date;
  response: HttpResponse<unknown>;
}
