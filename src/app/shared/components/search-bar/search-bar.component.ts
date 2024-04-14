import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements AfterViewInit {
  public searchControl = this._fb.group({
    searchTerm: ''
  });

  @Input() currentSearchTerm!: string;
  @Output() searchTermChanged = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  constructor(private _fb: FormBuilder) {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), takeUntilDestroyed(), distinctUntilChanged())
      .subscribe((term) => {
        this.searchTermChanged.emit(term.searchTerm ?? '');
      });
  }

  ngAfterViewInit(): void {
    this.searchControl.get('searchTerm')?.setValue(this.currentSearchTerm);
    this.searchInput?.nativeElement.focus();
  }

  public clearSearchField(): void {
    this.searchControl.get('searchTerm')?.setValue('');
  }
}
