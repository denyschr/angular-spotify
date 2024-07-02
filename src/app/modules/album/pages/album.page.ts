import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '@models';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'as-album',
  templateUrl: './album.page.html',
  styleUrl: './album.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumPage {
  public readonly album$: Observable<Album> = this._route.data.pipe(
    map(paramMap => paramMap['data'])
  );

  constructor(private _route: ActivatedRoute) {}
}
