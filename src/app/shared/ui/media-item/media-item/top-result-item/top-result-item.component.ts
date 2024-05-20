import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseItemComponent } from '../base-item/base-item.component';

@Component({
  selector: 'app-top-result-item',
  templateUrl: './top-result-item.component.html',
  styleUrls: ['../base-item/base-item.component.scss', './top-result-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopResultItemComponent extends BaseItemComponent {}
