import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { JwtService } from '@services';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = inject(JwtService).getAccessToken();
  const request = req.clone({
    setHeaders: {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    }
  });
  return next(request);
};
