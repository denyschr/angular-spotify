import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'as-media-summary',
  templateUrl: './media-summary.component.html',
  styleUrl: './media-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaSummaryComponent {
  @Input({ required: true }) type!: 'Album' | 'Artist' | 'Track' | 'Playlist';
  @Input({ required: true }) title!: string;
  @Input({ required: true }) uri!: string;
  @Input() description?: string | null;
  @Input() creator?: string | null;
  @Input() songAlbumTitle?: string;
  @Input() trackCount?: number;
  @Input() followerCount?: number;
  @Input() imageUrl?: string;
  @Input() releaseDate?: string;

  public readonly trackMapping: { [k: string]: string } = { '=1': '# song', other: '# songs' };
  public readonly followerMapping: { [k: string]: string } = {
    '=1': '# follower',
    other: '# followers'
  };
}
