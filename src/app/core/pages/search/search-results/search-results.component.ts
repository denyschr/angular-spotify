import { Component, inject } from '@angular/core';
import { SearchService } from '../../../services';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { SearchResponse } from '../../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
  public readonly search$?: Observable<{ response: SearchResponse | null; term: string }>;

  public currentMediaType = 'all';

  constructor(private _route: ActivatedRoute) {
    const searchService = inject(SearchService);

    this.search$ = this._route.paramMap.pipe(
      map((paramMap) => paramMap.get('term') ?? ''),
      tap((term) => {
        searchService.setSearchTerm(term);
      }),
      switchMap((term) => {
        const response$: Observable<SearchResponse | null> = term ? searchService.search(term) : of(null);
        return response$.pipe(map((response) => ({ response, term })));
      })
    );
  }

  public updateMediaType(selectedMediaType: string): void {
    this.currentMediaType = selectedMediaType;
  }
}
