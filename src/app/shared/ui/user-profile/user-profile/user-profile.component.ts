import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '@services';

@Component({
  selector: 'sp-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent {
  public readonly user$ = inject(UserService).getUserProfile();
}
