import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MediaType } from '@models';
import { SearchService } from '@modules/search/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrl: './search-nav.component.scss'
})
export class SearchNavComponent implements OnInit, OnDestroy {
  @Input() mediaTypes!: MediaType[];

  public currentMediaType = MediaType.All;
  public searchTypeSubscription?: Subscription;

  constructor(private _searchService: SearchService) {}

  ngOnInit(): void {
    this.searchTypeSubscription = this._searchService.getSearchType().subscribe((mediaType) => {
      this.onSearchFilter(mediaType);
    });
  }

  public onSearchFilter(mediaType: MediaType): void {
    if (mediaType !== this.currentMediaType) {
      this.currentMediaType = mediaType;
      this._searchService.setSearchType(mediaType);
      this._searchService.syncRouteParams();
    }
  }

  ngOnDestroy(): void {
    if (this.searchTypeSubscription) {
      this.searchTypeSubscription.unsubscribe();
    }
  }
}
