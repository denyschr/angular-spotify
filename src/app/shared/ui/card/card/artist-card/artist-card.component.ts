import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseCardComponent } from '../base-card/base-card.component';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-card.component.html',
  styleUrls: ['../base-card/base-card.component.scss', './artist-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistCardComponent extends BaseCardComponent {}
