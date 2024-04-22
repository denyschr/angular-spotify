import { Component, Input } from '@angular/core';
import { MediaItem, MediaItemType } from '@models';

@Component({
  template: ''
})
export class BaseItemComponent {
  @Input() mediaItem!: MediaItem;
  public mediaItemTypes = MediaItemType;
}
