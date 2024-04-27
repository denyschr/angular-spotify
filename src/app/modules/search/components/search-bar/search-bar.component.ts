import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchService } from '@modules/search/services/search.service';
import { MediaType } from '@models';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit, AfterViewInit, OnDestroy {
  public searchControl = this._fb.nonNullable.group({
    searchTerm: ''
  });
  public searchSubscription?: Subscription;
  public initialPageLoading = true;

  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  constructor(
    private _fb: FormBuilder,
    private _searchService: SearchService,
    private _cdr: ChangeDetectorRef
  ) {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((term) => {
        this._searchService.setSearchTerm(term.searchTerm ?? '');
        this._searchService.syncRouteParams();
      });
  }

  ngOnInit(): void {
    this.searchSubscription = this._searchService.getSearchTerm().subscribe((term) => {
      const currentTerm = this.searchControl.get('searchTerm')?.value;
      if (currentTerm !== term && !this.initialPageLoading) {
        this.searchControl.get('searchTerm')?.setValue(term);
        this._cdr.detectChanges();
      }
      this.initialPageLoading = false;
    });
  }

  ngAfterViewInit(): void {
    this.searchInput?.nativeElement.focus();
  }

  public clearSearchField(): void {
    this._searchService.setSearchTerm('');
    this._searchService.setSearchType(MediaType.All);
    this.searchControl.get('searchTerm')?.setValue('');
    this.searchInput?.nativeElement.focus();
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
