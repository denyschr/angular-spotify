import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseCardComponent } from '../base-card/base-card.component';

@Component({
  selector: 'sp-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['../base-card/base-card.component.scss', './playlist-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistCardComponent extends BaseCardComponent {}
