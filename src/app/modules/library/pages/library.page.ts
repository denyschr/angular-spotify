import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '@services';
import { ignoreElements, catchError, of } from 'rxjs';

@Component({
  selector: 'sp-library',
  templateUrl: './library.page.html',
  styleUrl: './library.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryPage {
  public readonly albums$ = this._userService.getUserSavedAlbums();
  public readonly albumError$ = this.albums$.pipe(
    ignoreElements(),
    catchError(() => of("Could not fetch user's library"))
  );

  constructor(private _userService: UserService) {}
}
