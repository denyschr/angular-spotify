import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

export const authGuard: CanMatchFn = () => {
  const router = inject(Router);
  const token = inject(JwtService).getToken();
  if (!token) {
    console.log(`token: ${token}`);
    router.navigate(['/login']);
    return false;
  }
  return true;
};
