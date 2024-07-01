import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { JwtService } from '@services';

export function authGuard(options: {
  readonly isAuthenticated: boolean;
  readonly otherwise: string;
}): CanMatchFn {
  const { isAuthenticated, otherwise } = options;
  return () => {
    const router = inject(Router);
    const hasAccessToken = !!inject(JwtService).getAccessToken();
    if (hasAccessToken !== isAuthenticated) {
      return router.createUrlTree([otherwise]);
    }
    return true;
  };
}
