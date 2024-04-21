import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrl: './search-nav.component.scss'
})
export class SearchNavComponent {
  @Input() mediaTypes!: string[];
  @Output() selectedMediaType = new EventEmitter<string>();

  public currentMediaType = 'all';
  public searchSubscription?: Subscription;

  constructor(
    private _router: Router,
    private _searchService: SearchService
  ) {}

  public onSearchFilter(mediaType: string): void {
    this.currentMediaType = mediaType;
    this.selectedMediaType.emit(mediaType);
    this._searchService.setSearchType(mediaType);
    this._syncQueryParams(mediaType);
  }

  private _syncQueryParams(type: string): void {
    this.searchSubscription = this._searchService.getSearchTerm().subscribe((term) => {
      if (type !== 'all') {
        this._router.navigate(['search', term, type]);
      } else {
        this._router.navigate(['search', term]);
      }
    });
  }
}
