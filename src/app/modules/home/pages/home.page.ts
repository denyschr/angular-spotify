import { ChangeDetectionStrategy, Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { UserService } from '@services';

@Component({
  selector: 'sp-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  private readonly _recentPlayedTracks$ = this._userService.getRecentPlayedTracks();
  private readonly _userTopArtists$ = this._userService.getUserTopArtists();
  private readonly _userTopTracks$ = this._userService.getUserTopTracks();
  public readonly vm$ = forkJoin({
    recentPlayed: this._recentPlayedTracks$,
    topArtists: this._userTopArtists$,
    topTracks: this._userTopTracks$
  });

  constructor(private _userService: UserService) {}
}
