import { Component, Input } from '@angular/core';
import { Album, Artist, Playlist, Track } from '../../../../core/models';

@Component({
  template: '',
  styleUrl: './base-card.component.scss'
})
export class BaseCardComponent {
  @Input() mediaItem!: Album | Artist | Playlist | Track;
}
