import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { JwtService } from '../services/jwt.service';
import { AuthService } from '@core/services';

export const authGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  const accessToken = inject(JwtService).getAccessToken();
  if (!accessToken) {
    authService.logout();
    return false;
  }
  return true;
};
