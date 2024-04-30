import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription, debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { SearchService } from '@modules/search/services/search.service';
import { MediaType } from '@models';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit, AfterViewInit, OnDestroy {
  public searchControl = new FormControl('');
  public searchTermSubscription?: Subscription;
  public initialPageLoading = true;

  @ViewChild('input') inputRef?: ElementRef<HTMLInputElement>;

  constructor(
    private _searchService: SearchService,
    private _cdr: ChangeDetectorRef
  ) {
    this.searchControl.valueChanges
      .pipe(
        takeUntilDestroyed(),
        debounceTime(300),
        distinctUntilChanged(),
        tap((term) => {
          if (!term) this._searchService.searchType = MediaType.All;
          this._searchService.searchTerm = term ?? '';
          this._searchService.syncRouteParams();
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this._searchService.searchType = MediaType.All;
    this.searchTermSubscription = this._searchService.searchTerm.subscribe((term) => {
      const currentTerm = this.searchControl.value;
      if (currentTerm !== term && !this.initialPageLoading) {
        this.searchControl.setValue(term);
        this._cdr.detectChanges();
      }
      this.initialPageLoading = false;
    });
  }

  ngAfterViewInit(): void {
    this.inputRef?.nativeElement.focus();
  }

  ngOnDestroy(): void {
    if (this.searchTermSubscription) this.searchTermSubscription.unsubscribe();
  }

  public clear(): void {
    this._searchService.searchTerm = '';
    this._searchService.searchType = MediaType.All;
    this.inputRef?.nativeElement.focus();
  }
}
