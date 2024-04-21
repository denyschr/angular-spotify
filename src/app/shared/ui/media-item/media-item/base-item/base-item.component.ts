import { Component, Input } from '@angular/core';
import { Album, Artist, Playlist, Track } from '@models';

@Component({
  template: ''
})
export class BaseItemComponent {
  @Input() mediaItem!: Album | Artist | Playlist | Track;
}
