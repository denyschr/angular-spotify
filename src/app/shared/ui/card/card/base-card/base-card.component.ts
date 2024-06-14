import { Component, Input } from '@angular/core';
import { MediaItem, MediaType } from '@models';

@Component({
  template: ''
})
export class BaseCardComponent {
  @Input({ required: true }) mediaItem!: MediaItem;
  public mediaTypes = MediaType;
}
