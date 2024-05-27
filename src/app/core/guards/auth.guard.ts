import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

export const authGuard: CanMatchFn = () => {
  const router = inject(Router);
  const accessToken = inject(JwtService).getAccessToken();
  const refreshToken = inject(JwtService).getRefreshToken();
  if (!accessToken && !refreshToken) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
