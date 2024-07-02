import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MediaSectionType } from '@models';
import { SearchService } from '@modules/search/services/search.service';

@Component({
  selector: 'as-search-nav-bar',
  templateUrl: './search-nav-bar.component.html',
  styleUrl: './search-nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchNavBarComponent {
  public readonly selectedSectionType$ = this._searchService.selectedSectionType$;
  public readonly sectionTypes$ = this._searchService.sectionTypes$;

  constructor(private _searchService: SearchService) {}

  public onUpdateSearchType(type: MediaSectionType): void {
    this._searchService.setSectionType(type);
    this._searchService.updateRouteParams();
  }
}
