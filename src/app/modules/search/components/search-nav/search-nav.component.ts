import { Component, Input, inject } from '@angular/core';
import { MediaType } from '@models';
import { SearchService } from '@modules/search/services/search.service';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrl: './search-nav.component.scss'
})
export class SearchNavComponent {
  private readonly _searchService = inject(SearchService);
  @Input({ required: true }) mediaTypes!: MediaType[];
  @Input({ required: true }) currMediaType!: MediaType;

  public onSearchFilter(mediaType: MediaType): void {
    this._searchService.setSearchType(mediaType);
    this._searchService.syncRouteParams();
  }
}
