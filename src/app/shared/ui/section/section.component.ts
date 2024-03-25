import { Component, Input } from '@angular/core';
import { INITIAL_ITEM_LENGTH, ITEM_LIMIT } from '../../../core/constants/app.constants';
import { Album } from '../../../core/models/album.model';
import { Artist } from '../../../core/models/artist.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  public currentLengthOfItems = INITIAL_ITEM_LENGTH;
  public totalItems = ITEM_LIMIT;

  @Input() title?: string;
  @Input() isShowMore = true;
  @Input() dataArray!: { items: (Album | Artist)[]; isAlbumDate?: boolean; isImageRounded?: boolean };

  newItemLength(value: number): void {
    this.currentLengthOfItems = value;
  }
}
