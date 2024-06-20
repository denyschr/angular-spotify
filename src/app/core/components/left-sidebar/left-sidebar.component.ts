import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@core/services';

@Component({
  selector: 'sf-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftSidebarComponent {
  private readonly _authService = inject(AuthService);
  public onLogout(): void {
    this._authService.logout();
  }
}
