import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { EMPTY, Observable, catchError } from 'rxjs';

export function apiResolver<T>(idLoader: (id: string) => Observable<T>): ResolveFn<T> {
  return (route: ActivatedRouteSnapshot): Observable<T> => {
    const router = inject(Router);
    return idLoader(route.paramMap.get('id')!).pipe(
      catchError(() => {
        router.navigate(['**']);
        return EMPTY;
      })
    );
  };
}
