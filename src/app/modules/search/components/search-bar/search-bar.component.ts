import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs';
import { SearchService } from '@modules/search/services/search.service';
import { MediaSectionType } from '@models';
import { onDestroy } from '@utils';

@Component({
  selector: 'sp-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit, AfterViewInit {
  @ViewChild('input') inputRef?: ElementRef<HTMLInputElement>;
  public searchControl: FormControl = new FormControl('');
  private readonly _destroy$ = onDestroy();

  constructor(private _searchService: SearchService) {
    this.searchControl.valueChanges
      .pipe(
        takeUntilDestroyed(),
        debounceTime(300),
        distinctUntilChanged(),
        tap(term => {
          if (!term) this._searchService.setSectionType(MediaSectionType.all);
          this._searchService.setSearchTerm(term);
          this._searchService.updateRouteParams();
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this._searchService.searchTerm$.pipe(takeUntil(this._destroy$)).subscribe(term => {
      this.searchControl.patchValue(term);
    });
  }

  ngAfterViewInit(): void {
    this.inputRef?.nativeElement.focus();
  }

  public clear(): void {
    this._searchService.setSearchTerm('');
    this.inputRef?.nativeElement.focus();
  }

  public showClearButton(): boolean {
    return !!this.searchControl.value;
  }
}
