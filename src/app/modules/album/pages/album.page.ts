import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrl: './album.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AlbumService]
})
export class AlbumPage {}
