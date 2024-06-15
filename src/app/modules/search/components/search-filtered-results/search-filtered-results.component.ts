import { Component, Input, inject } from '@angular/core';
import { MediaItem, MediaType } from '@models';
import { SearchService } from '@modules/search/services/search.service';

@Component({
  selector: 'app-search-filtered-results',
  templateUrl: './search-filtered-results.component.html',
  styleUrl: './search-filtered-results.component.scss'
})
export class SearchFilteredResultsComponent {
  public mediaTypes = MediaType;
  private _searchService = inject(SearchService);
  @Input({ required: true }) results!: MediaItem[];

  public loadMore(): void {
    setTimeout(() => {
      this._searchService.nextPage(10);
    }, 500);
  }
}
