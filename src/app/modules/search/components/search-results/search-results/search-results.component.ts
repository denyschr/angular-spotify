import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MediaType, SearchResultsArray } from '@models';
import { SearchService } from '@modules/search/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent {
  private readonly _searchService = inject(SearchService);
  public mediaTypes = MediaType;
  public isLoading = false;
  @Input({ required: true }) searchResults!: SearchResultsArray[];
  @Input({ required: true }) currMediaType!: MediaType;

  public loadMore(): void {
    // this.isLoading = true;
    this._searchService.nextPage(29);
  }
}
