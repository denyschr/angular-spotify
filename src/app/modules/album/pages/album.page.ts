import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-album',
  templateUrl: './album.page.html',
  styleUrl: './album.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumPage {}
