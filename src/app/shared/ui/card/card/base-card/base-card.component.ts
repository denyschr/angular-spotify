import { Component, Input } from '@angular/core';
import { MediaItem, MediaItemType } from '@models';

@Component({
  template: ''
})
export class BaseCardComponent {
  @Input() mediaItem!: MediaItem;
  public mediaItemTypes = MediaItemType;
}
