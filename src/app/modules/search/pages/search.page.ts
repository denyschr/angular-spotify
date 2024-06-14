import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrl: './search.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPage {
  private readonly _router = inject(Router);
  public isNavBar(): boolean {
    return this._router.url.startsWith('/search/');
  }
}
