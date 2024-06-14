import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MediaSectionType } from '@models';
import { SearchService } from '@modules/search/services/search.service';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrl: './search-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchNavComponent {
  private readonly _searchService = inject(SearchService);
  public readonly currentSectionType$ = this._searchService.currSectionType$;
  public readonly sectionTypes$ = this._searchService.sectionTypes$;
  public onUpdateSearchType(type: MediaSectionType): void {
    this._searchService.setSectionType(type);
    this._searchService.updateQueryParams();
  }
}
