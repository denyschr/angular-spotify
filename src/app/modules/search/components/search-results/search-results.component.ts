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
      type: (paramMap.get('type') as MediaSectionType) ?? MediaSectionType.all
    })),
    tap(({ term, type }) => {
      this._searchService.setSearchTerm(term);
      this._searchService.setSectionType(type);
    })
  );

  private readonly _allResults$ = this._routeParams$.pipe(
    switchMap(({ term }) => {
      return this._searchService.getAll(term);
    })
  );

  private readonly _filteredResults$ = this._routeParams$.pipe(
    switchMap(({ term, type }) => {
      this._searchService.resetPage();
      return this._searchService.pagination$.pipe(
        concatMap((page): Observable<MediaItem[]> => {
          switch (type) {
            case this.sectionTypes.albums:
              return this._searchService.getAlbums(term, page);
            case this.sectionTypes.artists:
              return this._searchService.getArtists(term, page);
            case this.sectionTypes.tracks:
              return this._searchService.getTracks(term, page);
            case this.sectionTypes.playlists:
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
    this._allResults$,
    this._filteredResults$
  ]).pipe(
    map(([params, allResults, filteredResults]) => ({
      term: params.term,
      type: params.type,
      allResults,
      filteredResults
    }))
  );
}
