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
    const jwtService = inject(JwtService);
    const hasAccessToken = !!jwtService.getAccessToken();
    if (hasAccessToken !== isAuthenticated) {
      jwtService.clearStorage();
      return router.createUrlTree([otherwise]);
    }
    return true;
  };
}
