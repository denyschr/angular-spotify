import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaType, SearchResults } from '@models';
import { map, tap, switchMap, combineLatest, of, concatMap, scan } from 'rxjs';
import { SearchService } from '../services/search.service';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrl: './search.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPage {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _searchService = inject(SearchService);
  private readonly _categoriesService = inject(CategoriesService);
  public totalResults?: number;
  public mediaTypes = MediaType;
  public searchNavItems: MediaType[] = [];

  private readonly _routeParams$ = this._activatedRoute.queryParamMap.pipe(
    map((queryParamMap) => ({
      term: queryParamMap.get('term') ?? '',
      type: (queryParamMap.get('type') as MediaType) ?? MediaType.All
    })),
    tap(({ term, type }) => {
      this._searchService.nextPage(true);
      this._searchService.setSearchTerm(term);
      this._searchService.setSearchType(type);
    })
  );

  private readonly _categories$ = this._categoriesService.getCategories().pipe(map((res) => res.categories.items));

  private readonly _searchResults$ = this._routeParams$.pipe(
    switchMap(({ term, type }) => {
      if (term) {
        return this._searchService.pagination$.pipe(
          map((pagination) => ({ term, type, pagination })),
          concatMap(({ term, pagination }) => this._searchService.search(term, pagination.page)),
          tap(({ totalResults, mediaTypes }) => {
            this.totalResults = totalResults;
            this.searchNavItems = mediaTypes;
          }),
          map(({ results }) => [results]),
          scan((prevResults: SearchResults[], currResults: SearchResults[]) => [...prevResults, ...currResults], [])
        );
      } else {
        return of(null);
      }
    })
  );

  public readonly vm$ = combineLatest([this._routeParams$, this._categories$, this._searchResults$]).pipe(
    map(([params, categories, searchResults]) => ({
      term: params.term,
      type: params.type,
      categories,
      searchResults
    }))
  );
}
