import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'sp-artist',
  templateUrl: './artist.page.html',
  styleUrl: './artist.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ArtistService]
})
export class ArtistPage {}
