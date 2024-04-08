import { Component, Input } from '@angular/core';
import { Album, Artist, Playlist, Track } from '../../../core/models';

@Component({
  selector: 'app-base-section',
  templateUrl: './base-section.component.html',
  styleUrl: './base-section.component.scss'
})
export class BaseSectionComponent {
  @Input() sectionTitle?: string;
  @Input() mediaContent!: (Album | Artist | Playlist | Track)[];
  @Input() isAlbumDate?: boolean;
}
