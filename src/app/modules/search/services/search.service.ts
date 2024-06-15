import { Injectable, inject } from '@angular/core';
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
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { objectToValues } from 'src/app/core/utils';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly _router = inject(Router);
  private readonly _http = inject(HttpClient);
  private readonly _searchTermSubject = new BehaviorSubject<string>('');
  private readonly _sectionTypesSubject = new BehaviorSubject<MediaSectionType[]>([]);
  private readonly _selectedSectionTypeSubject = new BehaviorSubject<MediaSectionType>(
    MediaSectionType.all
  );
  private readonly _paginationSubject = new BehaviorSubject<number>(0);
  public readonly searchTerm$ = this._searchTermSubject.asObservable();
  public readonly sectionTypes$ = this._sectionTypesSubject.asObservable();
  public readonly selectedSectionType$ = this._selectedSectionTypeSubject.asObservable();
  public readonly pagination$ = this._paginationSubject.asObservable();

  public getAll(term: string): Observable<Search> {
    const params = {
      q: term,
      type: 'album,artist,playlist,track',
      limit: MAX_FETCH_CONTENT
    };
    return this._http.get<SearchResponse>(`${SpotifyConfig.apiUrl}/search`, { params }).pipe(
      tap(res => {
        const sectionTypes = this.getSectionTypes(res);
        this._sectionTypesSubject.next(sectionTypes);
      }),
      map(res => ({
        results: this.formatResults(res),
        total: this.calcTotal(res)
      }))
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
    if (term) {
      this._router.navigate(['/search', term, type]);
    } else {
      this._router.navigate(['/search']);
    }
  }

  private getSectionTypes(res: SearchResponse): MediaSectionType[] {
    return objectToValues(res).reduce(
      (sectionTypes: MediaSectionType[], result) => {
        const mediaType = result.items[0]?.type;
        if (mediaType) {
          sectionTypes.push(`${mediaType}s` as MediaSectionType);
        }
        return sectionTypes;
      },
      [MediaSectionType.all]
    );
  }

  private formatResults(res: SearchResponse): SearchResults {
    return {
      albums: res.albums.items,
      artists: res.artists.items,
      tracks: res.tracks.items,
      playlists: res.playlists.items
    };
  }

  private calcTotal(res: SearchResponse): number {
    return objectToValues(res).reduce((total, result) => {
      total += result.total;
      return total;
    }, 0);
  }
}
