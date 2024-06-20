import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaItem, MediaSectionType, MediaType } from '@models';
import { SearchService } from '@modules/search/services/search.service';
import { Observable, concatMap, map, of, scan, switchMap, tap } from 'rxjs';

@Component({
  selector: 'sp-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent {
  public mediaTypes = MediaType;
  public sectionTypes = MediaSectionType;
  public searchTerm = '';
  public selectedSectionType?: MediaSectionType;
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _searchService = inject(SearchService);

  private readonly _routeParams$ = this._activatedRoute.paramMap.pipe(
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
        scan((prevResults, currResults) => [...prevResults, ...currResults])
      );
    })
  );
}
