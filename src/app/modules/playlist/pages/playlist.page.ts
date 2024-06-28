import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from '@core/models';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'sp-playlist',
  templateUrl: './playlist.page.html',
  styleUrl: './playlist.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistPage {
  public readonly playlist$: Observable<Playlist> = this._route.data.pipe(
    map(paramMap => paramMap['data'])
  );

  constructor(private _route: ActivatedRoute) {}
}
