import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from '@models';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'sp-track',
  templateUrl: './track.page.html',
  styleUrl: './track.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackPage {
  public readonly track$: Observable<Track> = this._route.data.pipe(
    map(paramMap => paramMap['data'])
  );

  constructor(private _route: ActivatedRoute) {}
}
