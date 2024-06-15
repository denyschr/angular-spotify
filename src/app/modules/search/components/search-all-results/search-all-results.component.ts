import { Component, Input } from '@angular/core';
import { SearchResults } from '@models';

@Component({
  selector: 'app-search-all-results',
  templateUrl: './search-all-results.component.html',
  styleUrl: './search-all-results.component.scss'
})
export class SearchAllResultsComponent {
  @Input({ required: true }) results!: SearchResults | null;
}
