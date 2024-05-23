import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseItemComponent } from '../base-item/base-item.component';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['../base-item/base-item.component.scss', './track-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackItemComponent extends BaseItemComponent {}
