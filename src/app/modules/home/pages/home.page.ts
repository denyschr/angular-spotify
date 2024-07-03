import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, forkJoin, ignoreElements, of } from 'rxjs';
import { UserService } from '@services';

@Component({
  selector: 'as-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  private readonly _recentPlayedTracks$ = this._userService.getRecentPlayedTracks();
  private readonly _userTopArtists$ = this._userService.getUserTopArtists();
  private readonly _userTopTracks$ = this._userService.getUserTopTracks();
  public readonly userData$ = forkJoin({
    recentPlayed: this._recentPlayedTracks$,
    topArtists: this._userTopArtists$,
    topTracks: this._userTopTracks$
  });
  public readonly userDataError$ = this.userData$.pipe(
    ignoreElements(),
    catchError(() => of('Could not fetch user data'))
  );

  constructor(private _userService: UserService) {}
}
