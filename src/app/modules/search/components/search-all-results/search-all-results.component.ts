import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SearchResults } from '@models';

@Component({
  selector: 'sp-search-all-results',
  templateUrl: './search-all-results.component.html',
  styleUrl: './search-all-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchAllResultsComponent {
  @Input({ required: true }) results!: SearchResults | null;
}
