import { Component, Input } from '@angular/core';
import { Album, Artist } from '../../../../core/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data!: Album | Artist;
  @Input() isImageRounded?: boolean;
  @Input() isAlbumDate?: boolean;
}
