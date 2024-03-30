import { Component, Input } from '@angular/core';
import { Album, Artist, Audiobook, Episode, Playlist, Show } from '../../../../core/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() musicItem!: Album | Artist | Playlist | Show | Episode | Audiobook;
  @Input() isImageRounded?: boolean;
  @Input() isAlbumDate?: boolean;
}
