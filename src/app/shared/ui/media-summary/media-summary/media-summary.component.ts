import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sp-media-summary',
  templateUrl: './media-summary.component.html',
  styleUrl: './media-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaSummaryComponent {
  @Input({ required: true }) type!: 'Album' | 'Artist' | 'Track' | 'Playlist';
  @Input({ required: true }) title!: string;
  @Input({ required: true }) uri!: string;
  @Input() description?: string;
  @Input() creator?: string;
  @Input() trackCount?: number;
  @Input() likesCount?: number;
  @Input() followerCount?: number;
  @Input() imageUrl?: string;
  @Input() releaseDate?: string;

  public readonly likeMapping: { [k: string]: string } = { '=1': '# like', other: '# likes' };
  public readonly trackMapping: { [k: string]: string } = { '=1': '# song', other: '# songs' };
  public readonly followerMapping: { [k: string]: string } = {
    '=1': '# follower',
    other: '# followers'
  };
}
