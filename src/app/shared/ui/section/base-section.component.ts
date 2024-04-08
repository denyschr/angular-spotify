import { Component, Input } from '@angular/core';
import { INITIAL_ITEM_LENGTH, ITEM_LIMIT } from '../../../core/constants/app.constants';
import { MediaContent } from '../../../core/models';

@Component({
  selector: 'app-base-section',
  templateUrl: './base-section.component.html',
  styleUrl: './base-section.component.scss'
})
export class BaseSectionComponent {
  public currentLengthOfItems = INITIAL_ITEM_LENGTH;
  public totalItems = ITEM_LIMIT;

  @Input() sectionTitle?: string;
  @Input() isShowMore = true;
  @Input() mediaContent!: MediaContent;

  newItemLength(value: number): void {
    this.currentLengthOfItems = value;
  }
}
