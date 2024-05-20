import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MediaItem, MediaItemType } from '@models';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {
  @Input() sectionTitle?: string;
  @Input() mediaItems!: MediaItem[];
  @Input() isAlbumDate?: boolean;
  public mediaItemTypes = MediaItemType;
}
