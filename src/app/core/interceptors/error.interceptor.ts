import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService, JwtService } from '@core/services';
import { catchError, switchMap, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const jwtService = inject(JwtService);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        jwtService.destroyAccessToken();
        return authService.generateNewToken().pipe(
          switchMap(res => {
            jwtService.saveAccessToken(res.access_token);
            jwtService.saveRefreshToken(res.refresh_token);
            return next(
              req.clone({
                setHeaders: {
                  Authorization: `Bearer ${res.access_token}`
                }
              })
            );
          }),
          catchError((err: HttpErrorResponse) => throwError(() => err.error))
        );
      }
      return throwError(() => err.error);
    })
  );
};
