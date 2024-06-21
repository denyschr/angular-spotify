import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-artist',
  templateUrl: './artist.page.html',
  styleUrl: './artist.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistPage {}
