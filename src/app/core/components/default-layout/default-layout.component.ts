import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {
  constructor(private _router: Router) {}

  public isSearchPage(): boolean {
    return this._router.url.startsWith('/search');
  }
}
