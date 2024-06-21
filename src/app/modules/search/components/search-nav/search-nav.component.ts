import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MediaSectionType } from '@models';
import { SearchService } from '@modules/search/services/search.service';

@Component({
  selector: 'sp-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrl: './search-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchNavComponent {
  private readonly _searchService = inject(SearchService);
  public readonly selectedSectionType$ = this._searchService.selectedSectionType$;
  public readonly sectionTypes$ = this._searchService.sectionTypes$;

  public onUpdateSearchType(type: MediaSectionType): void {
    this._searchService.setSectionType(type);
    this._searchService.updateRouteParams();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public trackById(index: number, item: unknown) {
    return index;
  }
}
