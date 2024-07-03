import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationService } from '@services';

@Component({
  selector: 'as-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {
  constructor(private _navigation: NavigationService) {}

  public goBack(): void {
    this._navigation.back();
  }

  public goForward(): void {
    this._navigation.forward();
  }
}
