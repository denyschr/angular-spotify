import { Component, Input } from '@angular/core';
import { Album, Artist, Playlist, Track } from '../../../core/models';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @Input() sectionTitle?: string;
  @Input() mediaContent!: (Album | Artist | Playlist)[];
  @Input() isAlbumDate?: boolean;
}
