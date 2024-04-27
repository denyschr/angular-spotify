import { Component, inject } from '@angular/core';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MediaType, SearchResponse } from '@models';
import { SearchService } from '@modules/search/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
  public readonly search$?: Observable<{ response: SearchResponse | null; searchTerm: string; mediaType: MediaType }>;
  public mediaTypes = MediaType;

  constructor(private _route: ActivatedRoute) {
    const searchService = inject(SearchService);

    this.search$ = this._route.paramMap.pipe(
      map((paramMap) => {
        return { term: paramMap.get('term') ?? '', type: paramMap.get('type') ?? MediaType.All };
      }),
      tap(({ term, type }) => {
        searchService.setSearchTerm(term);
        searchService.setSearchType(type as MediaType);
      }),
      switchMap(({ term, type }) => {
        const response$: Observable<SearchResponse | null> = term ? searchService.search(term) : of(null);
        return response$.pipe(map((response) => ({ response, searchTerm: term, mediaType: type as MediaType })));
      })
    );
  }
}
