import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseCardComponent } from '../base-card/base-card.component';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['../base-card/base-card.component.scss', './album-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumCardComponent extends BaseCardComponent {
  @Input() isAlbumDate?: boolean;
}
