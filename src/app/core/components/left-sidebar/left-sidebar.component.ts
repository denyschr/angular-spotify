import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@core/services';
import { MenuItem } from '@models';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftSidebarComponent {
  private readonly _authService = inject(AuthService);
  public menuItems: MenuItem[] = [
    {
      name: 'Home',
      path: '/home',
      icon: '_icon-home'
    },
    {
      name: 'Search',
      path: '/search',
      icon: '_icon-magnifier'
    },
    {
      name: 'Your library',
      path: '/collection/playlists',
      icon: '_icon-library'
    }
  ];

  public onLogout(): void {
    this._authService.logout();
  }
}
