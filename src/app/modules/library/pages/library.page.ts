import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '@services';

@Component({
  selector: 'sp-library',
  templateUrl: './library.page.html',
  styleUrl: './library.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryPage {
  public readonly albums$ = this._userService.getUserSavedAlbums();

  constructor(private _userService: UserService) {}
}
