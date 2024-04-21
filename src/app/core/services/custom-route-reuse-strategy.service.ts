import { ActivatedRouteSnapshot, DetachedRouteHandle, Route, RouteReuseStrategy } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private _routeStore = new Map<Route, DetachedRouteHandle>();

  private _calcPath(route: ActivatedRouteSnapshot): Route | null {
    return route.routeConfig;
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this._routeStore.set(this._calcPath(route)!, handle);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this._routeStore.get(this._calcPath(route)!);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this._routeStore.get(this._calcPath(route)!) as DetachedRouteHandle;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
