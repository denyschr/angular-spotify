import { Component, Input } from '@angular/core';
import { BaseItemComponent } from '../base-item/base-item.component';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['../base-item/base-item.component.scss', './album-item.component.scss']
})
export class AlbumItemComponent extends BaseItemComponent {
  @Input() isAlbumDate?: boolean;
}
