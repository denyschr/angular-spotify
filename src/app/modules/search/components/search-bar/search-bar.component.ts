import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject
} from '@angular/core';
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
  private readonly _searchService = inject(SearchService);
  private readonly _cdr = inject(ChangeDetectorRef);
  public searchFormControl = new FormControl<string | null>('');
  public searchTermSubscription?: Subscription;

  @ViewChild('input') inputRef?: ElementRef<HTMLInputElement>;

  constructor() {
    this.searchFormControl.valueChanges
      .pipe(
        takeUntilDestroyed(),
        debounceTime(300),
        distinctUntilChanged(),
        tap((term) => {
          this._searchService.setSearchTerm(term ?? '');
          this._searchService.syncRouteParams();
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.searchTermSubscription = this._searchService.searchTerm$.subscribe((term) => {
      this.searchFormControl.patchValue(term);
      this._cdr.detectChanges();
    });
  }

  ngAfterViewInit(): void {
    this.inputRef?.nativeElement.focus();
  }

  ngOnDestroy(): void {
    if (this.searchTermSubscription) this.searchTermSubscription.unsubscribe();
  }

  public clear(): void {
    this._searchService.setSearchTerm('');
    this._searchService.setSearchType(MediaType.All);
    this.inputRef?.nativeElement.focus();
  }
}
