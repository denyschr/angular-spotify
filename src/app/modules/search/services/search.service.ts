import { Injectable } from '@angular/core';
import {
  Album,
  AlbumsResponse,
  Artist,
  ArtistsResponse,
  Playlist,
  PlaylistsResponse,
  Track,
  TracksResponse,
  MediaSectionType,
  Search,
  SearchResponse,
  SearchResults
} from '@models';
import { MAX_FETCH_CONTENT } from '@constants';
import { SpotifyConfig } from '@environment';
import { BehaviorSubject, Observable, distinctUntilChanged, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { objectToValues } from '@utils';

@Injectable()
export class SearchService {
  private readonly _searchTermSubject = new BehaviorSubject<string>('');
  private readonly _sectionTypesSubject = new BehaviorSubject<MediaSectionType[]>([]);
  private readonly _selectedSectionTypeSubject = new BehaviorSubject<MediaSectionType>(
    MediaSectionType.all
  );
  private readonly _paginationSubject = new BehaviorSubject<number>(0);
  public readonly searchTerm$ = this._searchTermSubject.asObservable().pipe(distinctUntilChanged());
  public readonly sectionTypes$ = this._sectionTypesSubject
    .asObservable()
    .pipe(distinctUntilChanged());
  public readonly selectedSectionType$ = this._selectedSectionTypeSubject.asObservable();
  public readonly pagination$ = this._paginationSubject.asObservable();

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {}

  public getAll(term: string): Observable<Search> {
    const params = {
      q: term,
      type: 'album,artist,playlist,track',
      limit: MAX_FETCH_CONTENT
    };
    return this._http.get<SearchResponse>(`${SpotifyConfig.apiUrl}/search`, { params }).pipe(
      map(res => ({
        results: this.formatResults(res),
        total: this.calcTotal(res)
      })),
      tap(res => {
        const sectionTypes = this.retrieveSectionTypes(res);
        this._sectionTypesSubject.next(sectionTypes);
      })
    );
  }

  public getAlbums(term: string, page: number): Observable<Album[]> {
    const params = {
      q: term,
      type: 'album',
      offset: page,
      limit: MAX_FETCH_CONTENT
    };
    return this._http
      .get<AlbumsResponse>(`${SpotifyConfig.apiUrl}/search`, { params })
      .pipe(map(res => res.albums.items));
  }

  public getArtists(term: string, page: number): Observable<Artist[]> {
    const params = {
      q: term,
      type: 'artist',
      offset: page,
      limit: MAX_FETCH_CONTENT
    };
    return this._http
      .get<ArtistsResponse>(`${SpotifyConfig.apiUrl}/search`, { params })
      .pipe(map(res => res.artists.items));
  }

  public getTracks(term: string, page: number): Observable<Track[]> {
    const params = {
      q: term,
      type: 'track',
      offset: page,
      limit: MAX_FETCH_CONTENT
    };
    return this._http
      .get<TracksResponse>(`${SpotifyConfig.apiUrl}/search`, { params })
      .pipe(map(res => res.tracks.items));
  }

  public getPlaylists(term: string, page: number): Observable<Playlist[]> {
    const params = {
      q: term,
      type: 'playlist',
      offset: page,
      limit: MAX_FETCH_CONTENT
    };
    return this._http
      .get<PlaylistsResponse>(`${SpotifyConfig.apiUrl}/search`, { params })
      .pipe(map(res => res.playlists.items));
  }

  public setSearchTerm(term: string): void {
    this._searchTermSubject.next(term);
  }

  public setSectionType(type: MediaSectionType): void {
    this._selectedSectionTypeSubject.next(type);
  }

  public nextPage(page: number): void {
    this._paginationSubject.next(this._paginationSubject.value + page);
  }

  public resetPage(): void {
    this._paginationSubject.next(0);
  }

  public updateRouteParams(): void {
    const term = this._searchTermSubject.value;
    const type = this._selectedSectionTypeSubject.value;
    if (term && type !== MediaSectionType.all) {
      this._router.navigate(['/search', term, type]);
    } else if (term && type === MediaSectionType.all) {
      this._router.navigate(['/search', term]);
    } else {
      this._router.navigate(['/search']);
    }
  }

  private formatResults(res: SearchResponse): SearchResults {
    return {
      albums: { items: res.albums.items, type: MediaSectionType.albums },
      artists: { items: res.artists.items, type: MediaSectionType.artists },
      tracks: { items: res.tracks.items, type: MediaSectionType.tracks },
      playlists: { items: res.playlists.items, type: MediaSectionType.playlists }
    };
  }

  private retrieveSectionTypes(res: Search): MediaSectionType[] {
    return objectToValues(res.results).reduce(
      (sectionTypes: MediaSectionType[], media) => {
        if (media.items.length) {
          sectionTypes.push(media.type);
        }
        return sectionTypes;
      },
      [MediaSectionType.all]
    );
  }

  private calcTotal(res: SearchResponse): number {
    return objectToValues(res).reduce((total, media) => {
      total += media.total;
      return total;
    }, 0);
  }
}
