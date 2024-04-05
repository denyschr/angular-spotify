import { Component, Input } from '@angular/core';
import { BaseCardComponent } from '../base-card.component';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrl: '../base-card.component.scss'
})
export class AlbumCardComponent extends BaseCardComponent {
  @Input() isAlbumDate?: boolean;
}
