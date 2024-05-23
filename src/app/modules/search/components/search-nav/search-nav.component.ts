import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MediaType } from '@models';
import { SearchService } from '@modules/search/services/search.service';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrl: './search-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchNavComponent {
  private readonly _searchService = inject(SearchService);
  public readonly currMediaType$ = this._searchService.searchType$;
  public readonly mediaTypes$ = this._searchService.searchTypes$;

  public onSearchFilter(mediaType: MediaType): void {
    this._searchService.setSearchType(mediaType);
    this._searchService.updateQueryParams();
  }
}
