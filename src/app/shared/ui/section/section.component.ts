import { Component, Input } from '@angular/core';
import { INITIAL_ITEM_LENGTH, ITEM_LIMIT } from '../../../core/constants/app.constants';
import { MediaContent } from '../../../core/models';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  public currentLengthOfItems = INITIAL_ITEM_LENGTH;
  public totalItems = ITEM_LIMIT;

  @Input() sectionTitle?: string;
  @Input() isShowMore = true;
  @Input() musicContent!: MediaContent;

  newItemLength(value: number): void {
    this.currentLengthOfItems = value;
  }
}
