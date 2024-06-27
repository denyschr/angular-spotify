import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

export function authGuard(options: {
  readonly loggedIn: boolean;
  readonly otherwise: string;
}): CanMatchFn {
  const { loggedIn, otherwise } = options;
  return () => {
    const router = inject(Router);
    const hasAccessToken = !!inject(JwtService).getAccessToken();
    if (hasAccessToken !== loggedIn) {
      return router.createUrlTree([otherwise]);
    }
    return true;
  };
}
