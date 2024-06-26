import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {
  constructor(private _location: Location) {}

  public goBack(): void {
    this._location.back();
  }

  public goForward(): void {
    this._location.forward();
  }
}
