import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements AfterViewInit {
  public searchControl = this._fb.nonNullable.group({
    searchTerm: ''
  });

  @Input() currentSearchTerm!: string;
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _fb: FormBuilder
  ) {
    this.searchControl.valueChanges.pipe(debounceTime(300), takeUntilDestroyed()).subscribe((query) => {
      this.syncQueryParams(query.searchTerm ?? '');
    });
  }

  ngAfterViewInit(): void {
    this.searchControl.get('searchTerm')?.setValue(this.currentSearchTerm);
  }

  public clearSearchField(): void {
    this.searchControl.get('searchTerm')?.setValue('');
    this.searchInput?.nativeElement.focus();
  }

  private syncQueryParams(query: string): void {
    if (query) {
      this._router.navigate(['.'], {
        relativeTo: this._route,
        queryParams: { ['q']: query },
        replaceUrl: true
      });
    } else {
      this._router.navigate(['search']);
    }
  }
}
