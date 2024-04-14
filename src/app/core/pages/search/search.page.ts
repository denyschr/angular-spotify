import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CategoriesService, SearchService } from '../../services';
import { Observable, combineLatest, map, of, switchMap, tap } from 'rxjs';
import { SearchResponse, Category } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';

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

  public currentSearchTerm = '';
  public currentMediaType = 'all';

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {
    const searchService = inject(SearchService);

    this.search$ = this._route.paramMap.pipe(
      map((paramMap) => paramMap.get('term') ?? ''),
      tap((term) => {
        this.currentSearchTerm = term;
        this._cdr.detectChanges();
      }),
      switchMap((term) => {
        if (term) {
          return searchService.search(term);
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

  private syncQueryParams(term: string): void {
    if (term) {
      this._router.navigate(['search', term]);
    } else {
      this._router.navigate(['search']);
    }
  }

  public updateMediaType(selectedMediaType: string): void {
    this.currentMediaType = selectedMediaType;
  }
}
