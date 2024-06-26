import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@core/services';

@Component({
  selector: 'sf-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftSidebarComponent {
  constructor(private _authService: AuthService) {}
  public onLogout(): void {
    this._authService.logout();
  }
}
