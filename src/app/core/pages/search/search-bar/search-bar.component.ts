import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchService } from '../../../services';
import { Router } from '@angular/router';

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
    private _router: Router,
    private _searchService: SearchService,
    private _cdr: ChangeDetectorRef
  ) {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((term) => {
        this._syncQueryParams(term.searchTerm ?? '');
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

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  public clearSearchField(): void {
    this.searchControl.get('searchTerm')?.setValue('');
    this.searchInput?.nativeElement.focus();
  }

  private _syncQueryParams(term: string): void {
    if (term) {
      this._router.navigate(['search', term]);
    } else {
      this._router.navigate(['search']);
    }
  }
}
