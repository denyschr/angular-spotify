import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public counter = 0;

  constructor(
    private _router: Router,
    private _location: Location
  ) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.counter++;
      } else if (event instanceof NavigationStart) {
        if (event.navigationTrigger === 'popstate' && this.counter > 0) {
          this.counter--;
        }
      }
    });
  }

  public back(): void {
    this.counter--;
    if (this.counter > 0) {
      this._location.back();
    } else {
      this._router.navigate(['.']);
    }
  }

  public forward(): void {
    this._location.forward();
  }
}
