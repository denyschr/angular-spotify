import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseItemComponent } from '../base-item/base-item.component';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['../base-item/base-item.component.scss', './artist-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistItemComponent extends BaseItemComponent {}
