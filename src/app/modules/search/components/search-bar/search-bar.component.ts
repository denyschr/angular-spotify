import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs';
import { SearchService } from '@modules/search/services/search.service';
import { MediaType } from '@models';
import { onDestroy } from '@utils';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit, AfterViewInit {
  private readonly _searchService = inject(SearchService);
  private readonly _cdr = inject(ChangeDetectorRef);
  private readonly _destroy$ = onDestroy();
  public searchFormControl = new FormControl<string | null>('');

  @ViewChild('input') inputRef?: ElementRef<HTMLInputElement>;

  constructor() {
    this.searchFormControl.valueChanges
      .pipe(
        takeUntilDestroyed(),
        debounceTime(300),
        distinctUntilChanged(),
        tap((term) => {
          if (!term) this._searchService.setSearchType(MediaType.All);
          this._searchService.setSearchTerm(term || '');
          this._searchService.updateQueryParams();
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this._searchService.searchTerm$.pipe(takeUntil(this._destroy$)).subscribe((term) => {
      this.searchFormControl.patchValue(term);
      this._cdr.detectChanges();
    });
  }

  ngAfterViewInit(): void {
    this.inputRef?.nativeElement.focus();
  }

  public clear(): void {
    this._searchService.setSearchTerm('');
    this._searchService.setSearchType(MediaType.All);
    this.inputRef?.nativeElement.focus();
  }
}
