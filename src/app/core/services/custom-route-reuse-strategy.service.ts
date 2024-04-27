import { ActivatedRouteSnapshot, DetachedRouteHandle, Route, RouteReuseStrategy } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private handlers: Map<Route, DetachedRouteHandle> = new Map();
  public ignoredRoutes = ['search/'];

  constructor() {}

  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const path = this._getPath(route);
    for (const ignoredRoute of this.ignoredRoutes) {
      if (path.startsWith(ignoredRoute)) return false;
    }
    return true;
  }

  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (!route.routeConfig) return;
    this.handlers.set(route.routeConfig, handle);
  }

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.handlers.get(route.routeConfig);
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!route.routeConfig || !this.handlers.has(route.routeConfig)) return null;
    return this.handlers.get(route.routeConfig)!;
  }

  public shouldReuseRoute(current: ActivatedRouteSnapshot, future: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === current.routeConfig;
  }

  private _getPath(route: ActivatedRouteSnapshot): string {
    const segments: string[] = [];
    let next: ActivatedRouteSnapshot | null = route;

    while (next.firstChild) {
      next = next.firstChild;
    }

    while (next) {
      if (next.url.length) {
        segments.unshift(next.url.join('/'));
      }
      next = next?.parent;
    }
    return segments.join('/');
  }
}
