import { Component, Input } from '@angular/core';
import { SearchResponse } from '../../../models';

@Component({
  selector: 'app-top-result',
  templateUrl: './top-result.component.html',
  styleUrls: ['./top-result.component.scss', '../../../../shared/ui/section/section.component.scss']
})
export class TopResultComponent {
  @Input() search!: SearchResponse;
}
