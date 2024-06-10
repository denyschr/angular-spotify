import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrl: './search.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPage {
  private readonly _router = inject(Router);
  public readonly showNavBar$ = this._router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    map(event => {
      return event.url.startsWith('/search/');
    }),
    startWith(this._router.url.startsWith('/search/'))
  );
  // private readonly _activatedRoute = inject(ActivatedRoute);
  // private readonly _searchService = inject(SearchService);
  // public totalResults?: number;
  // public mediaTypes = MediaType;
  // public searchNavItems: MediaType[] = [];
  // private readonly _routeParams$ = this._activatedRoute.queryParamMap.pipe(
  //   map((queryParamMap) => ({
  //     term: queryParamMap.get('term') ?? '',
  //     type: (queryParamMap.get('type') as MediaType) ?? MediaType.All
  //   })),
  //   tap(({ term, type }) => {
  //     this._searchService.setSearchTerm(term);
  //     this._searchService.setSearchType(type);
  //   })
  // );
  // private readonly _searchResults$ = this._routeParams$.pipe(
  //   switchMap(({ term, type }) => {
  //     if (term) {
  //       this._searchService.resetPage();
  //       return this._searchService.pagination$.pipe(
  //         map((page) => ({ term, type, page })),
  //         concatMap(({ term, page }) => this._searchService.search(term, page)),
  //         tap(({ totalResults, mediaTypes }) => {
  //           this.totalResults = totalResults;
  //           this.searchNavItems = mediaTypes;
  //         }),
  //         map(({ results }) => [results]),
  //         scan(
  //           (prevResults: SearchResultsArray[], currResults: SearchResultsArray[]) => [...prevResults, ...currResults],
  //           []
  //         )
  //       );
  //     } else {
  //       return of(null);
  //     }
  //   })
  // );
}
