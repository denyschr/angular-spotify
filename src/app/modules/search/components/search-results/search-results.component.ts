import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaItem, MediaSectionType, MediaType } from '@models';
import { SearchService } from '@modules/search/services/search.service';
import { Observable, combineLatest, concatMap, map, of, scan, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent {
  public mediaTypes = MediaType;
  public sectionTypes = MediaSectionType;
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _searchService = inject(SearchService);

  private readonly _routeParams$ = this._activatedRoute.paramMap.pipe(
    map(paramMap => ({
      term: paramMap.get('term') ?? '',
      type: (paramMap.get('type') as MediaSectionType) ?? MediaSectionType.All
    })),
    tap(({ term, type }) => {
      this._searchService.setSearchTerm(term);
      this._searchService.setSectionType(type);
    })
  );

  public readonly allResults$ = this._routeParams$.pipe(
    switchMap(({ term }) => {
      if (term) {
        return this._searchService.getAll(term);
      } else {
        return of(null);
      }
    })
  );

  public readonly filteredResults$ = this._routeParams$.pipe(
    switchMap(({ term, type }) => {
      this._searchService.resetPage();
      return this._searchService.pagination$.pipe(
        concatMap((page): Observable<[] | MediaItem[]> => {
          switch (type) {
            case this.sectionTypes.Albums:
              return this._searchService.getAlbums(term, page);
            case this.sectionTypes.Artists:
              return this._searchService.getArtists(term, page);
            case this.sectionTypes.Tracks:
              return this._searchService.getTracks(term, page);
            case this.sectionTypes.Playlists:
              return this._searchService.getPlaylists(term, page);
            default:
              return of([]);
          }
        }),
        scan((prevResults, currResults) => [...prevResults, ...currResults])
      );
    })
  );

  public readonly vm$ = combineLatest([
    this._routeParams$,
    this.allResults$,
    this.filteredResults$
  ]).pipe(
    map(([params, allResults, filteredResults]) => ({
      term: params.term,
      type: params.type,
      allResults,
      filteredResults
    }))
  );

  public loadMore(): void {
    setTimeout(() => {
      this._searchService.nextPage(10);
    }, 500);
  }
}
