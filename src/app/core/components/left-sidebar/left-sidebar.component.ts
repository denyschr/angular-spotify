import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '@core/services';

@Component({
  selector: 'sf-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftSidebarComponent {
  constructor(private _userService: UserService) {}
  public onLogout(): void {
    this._userService.logout();
  }
}
