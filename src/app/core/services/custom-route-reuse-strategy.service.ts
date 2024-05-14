import { ActivatedRouteSnapshot, DetachedRouteHandle, Route, RouteReuseStrategy } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private readonly _handlers: Map<Route, DetachedRouteHandle> = new Map();
  private readonly _ignoredRoutes: { [path: string]: string } = { search: 'search/' };
  private readonly _searchRegex = /search\/.+/;

  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const path = this._getPath(route);
    for (const ignoredRoute of Object.values(this._ignoredRoutes)) {
      if (path.startsWith(ignoredRoute)) return false;
    }
    return true;
  }

  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (!route.routeConfig) return;
    this._handlers.set(route.routeConfig, handle);
  }

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this._handlers.get(route.routeConfig);
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!route.routeConfig || !this._handlers.has(route.routeConfig)) return null;
    return this._handlers.get(route.routeConfig)!;
  }

  public shouldReuseRoute(current: ActivatedRouteSnapshot, future: ActivatedRouteSnapshot): boolean {
    if (
      this._searchRegex.test(this._getPath(future)) &&
      this._getPath(current).startsWith(this._ignoredRoutes['search'])
    ) {
      return true;
    } else if (current.routeConfig !== future.routeConfig) {
      return false;
    }
    return true;
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
