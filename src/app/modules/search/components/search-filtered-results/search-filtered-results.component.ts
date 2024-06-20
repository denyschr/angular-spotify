import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MediaItem, MediaType } from '@models';
import { SearchService } from '@modules/search/services/search.service';

@Component({
  selector: 'sp-search-filtered-results',
  templateUrl: './search-filtered-results.component.html',
  styleUrl: './search-filtered-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFilteredResultsComponent {
  @Input({ required: true }) results!: MediaItem[];
  public mediaTypes = MediaType;
  private _searchService = inject(SearchService);

  public loadMore(): void {
    setTimeout(() => {
      this._searchService.nextPage(10);
    }, 500);
  }
}
