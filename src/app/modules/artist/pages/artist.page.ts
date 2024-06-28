import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '@models';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'sp-artist',
  templateUrl: './artist.page.html',
  styleUrl: './artist.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistPage {
  public readonly artist$: Observable<Artist> = this._route.data.pipe(
    map(paramMap => paramMap['data'])
  );

  constructor(private _route: ActivatedRoute) {}
}
