import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-playlist',
  templateUrl: './playlist.page.html',
  styleUrl: './playlist.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistPage {}
