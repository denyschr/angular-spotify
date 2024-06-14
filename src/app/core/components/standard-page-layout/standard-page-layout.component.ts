import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standard-page-layout',
  templateUrl: './standard-page-layout.component.html',
  styleUrl: './standard-page-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardPageLayoutComponent {
  constructor(private _router: Router) {}

  public isSearchBar(): boolean {
    return this._router.url.startsWith('/search');
  }
}
