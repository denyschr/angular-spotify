import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
  constructor(private _router: Router) {}

  public isSearchPage(): boolean {
    return this._router.url.startsWith('/search');
  }
}
