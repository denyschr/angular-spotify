import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaItem, MediaSectionType } from '@models';
import { SearchService } from '@modules/search/services/search.service';
import {
  Observable,
  catchError,
  concatMap,
  ignoreElements,
  map,
  of,
  scan,
  switchMap,
  tap
} from 'rxjs';

@Component({
  selector: 'sp-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent {
  public sectionTypes = MediaSectionType;
  public searchTerm = '';
  public selectedSectionType?: MediaSectionType;

  private readonly _routeParams$ = this._route.paramMap.pipe(
    map(paramMap => ({
      term: paramMap.get('term') ?? '',
      type: (paramMap.get('type') as MediaSectionType) || MediaSectionType.all
    })),
    tap(({ term, type }) => {
      this.searchTerm = term;
      this.selectedSectionType = type;
      this._searchService.setSearchTerm(term);
      this._searchService.setSectionType(type);
    })
  );

  public readonly allResults$ = this._routeParams$.pipe(
    switchMap(({ term }) => {
      return this._searchService.getAll(term);
    })
  );

  public readonly filteredResults$ = this._routeParams$.pipe(
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
        scan((prevResults, currResults) => [...prevResults, ...currResults]),
        tap(res => {
          if (!res.length) {
            this._router.navigate(['/search', term]);
          }
        })
      );
    })
  );

  public readonly resultError$ = this.allResults$.pipe(
    ignoreElements(),
    catchError(() => of('Could not fetch search results'))
  );

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _searchService: SearchService
  ) {}
}
