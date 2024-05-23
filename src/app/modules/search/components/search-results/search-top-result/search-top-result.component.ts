import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Track } from '@models';

@Component({
  selector: 'app-search-top-result',
  templateUrl: './search-top-result.component.html',
  styleUrl: './search-top-result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchTopResultComponent {
  @Input() topResult!: Track;
}
