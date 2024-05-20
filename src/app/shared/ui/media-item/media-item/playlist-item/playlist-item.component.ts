import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseItemComponent } from '../base-item/base-item.component';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['../base-item/base-item.component.scss', './playlist-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistItemComponent extends BaseItemComponent {}
