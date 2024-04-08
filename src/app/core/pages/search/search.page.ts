import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CategoriesService, SearchService } from '../../services';
import { Observable, combineLatest, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';
import { SearchResponse, Category } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrl: './search.page.scss',
  providers: [CategoriesService, SearchService]
})
export class SearchPage {
  private readonly categories$ = inject(CategoriesService)
    .getCategories()
    .pipe(map((categories) => categories.categories.items));
  private readonly search$: Observable<SearchResponse | null>;

  public obsList: (Observable<Category[]> | Observable<SearchResponse | null>)[] = [];
  public readonly vm$?: Observable<{ categories: Category[]; search: SearchResponse | null }>;

  public searchTerm = '';

  constructor(
    private _route: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {
    const searchService = inject(SearchService);

    this.search$ = this._route.queryParamMap.pipe(
      map((paramMap) => paramMap.get('q') ?? ''),
      tap((query) => {
        this.searchTerm = query;
        this._cdr.detectChanges();
      }),
      distinctUntilChanged(),
      switchMap((query) => {
        if (query) {
          return searchService.search(query);
        } else {
          return of(null);
        }
      })
    );

    this.obsList = [this.categories$, this.search$];

    this.vm$ = combineLatest(this.obsList).pipe(
      map(([categories, search]) => {
        return {
          categories: categories as Category[],
          search: search as SearchResponse | null
        };
      })
    );
  }
}
