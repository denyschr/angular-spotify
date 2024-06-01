import { Injectable, inject } from '@angular/core';
import {
  AlbumsResponse,
  ArtistsResponse,
  MediaType,
  PlaylistsResponse,
  SearchResponse,
  SearchResults,
  SearchResultsArray,
  TracksResponse
} from '@models';
import { MAX_FETCH_CONTENT } from '@constants';
import { SpotifyConfig } from '@environment';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { objectToValues } from 'src/app/core/utils';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly _router = inject(Router);
  private readonly _http = inject(HttpClient);

  private readonly _searchTermSubject = new BehaviorSubject<string>('');
  private readonly _searchTypeSubject = new BehaviorSubject<MediaType>(MediaType.All);
  private readonly _searchTypesSubject = new BehaviorSubject<MediaType[]>([]);
  private readonly _paginationSubject = new BehaviorSubject<number>(0);

  public readonly searchTerm$ = this._searchTermSubject.asObservable();
  public readonly searchType$ = this._searchTypeSubject.asObservable();
  public readonly searchTypes$ = this._searchTypesSubject.asObservable();
  public readonly pagination$ = this._paginationSubject.asObservable();

  public getAllResults(term: string): Observable<SearchResponse> {
    const params = {
      q: term,
      type: 'album,artist,playlist,track',
      limit: MAX_FETCH_CONTENT
    };
    return this._http.get<SearchResults>(`${SpotifyConfig.apiUrl}/search`, { params }).pipe(
      map((res) => ({
        results: this.formatResults(res),
        totalResults: this.calcTotalResults(res),
        mediaTypes: this.extractMediaTypes(res)
      }))
    );
  }

  public getAlbumResults(term: string) {
    const params = { type: 'albums', term };
    return this._http
      .get<AlbumsResponse>(`${SpotifyConfig.apiUrl}/search`, { params })
      .pipe(map((res) => res.albums.items));
  }

  public getArtistResults(term: string) {
    const params = { type: 'artists', term };
    return this._http
      .get<ArtistsResponse>(`${SpotifyConfig.apiUrl}/search`, { params })
      .pipe(map((res) => res.artists.items));
  }

  public getTrackResults(term: string) {
    const params = { type: 'tracks', term };
    return this._http
      .get<TracksResponse>(`${SpotifyConfig.apiUrl}/search`, { params })
      .pipe(map((res) => res.tracks.items));
  }

  public getPlaylistResults(term: string) {
    const params = { type: 'playlists', term };
    return this._http
      .get<PlaylistsResponse>(`${SpotifyConfig.apiUrl}/search`, { params })
      .pipe(map((res) => res.playlists.items));
  }

  private formatResults(res: SearchResults): SearchResultsArray {
    return {
      albums: res.albums.items,
      artists: res.artists.items,
      tracks: res.tracks.items,
      playlists: res.playlists.items
    };
  }

  private calcTotalResults(res: SearchResults): number {
    return objectToValues(res).reduce((total, searchResult) => {
      total += searchResult.total;
      return total;
    }, 0);
  }

  private extractMediaTypes(res: SearchResults): MediaType[] {
    return objectToValues(res).reduce(
      (mediaTypes: MediaType[], searchResult) => {
        const mediaType = searchResult.items[0]?.type;
        if (mediaType) {
          mediaTypes.push(`${mediaType}s` as MediaType);
        }
        return mediaTypes;
      },
      [MediaType.All]
    );
  }

  public setSearchTerm(term: string): void {
    this._searchTermSubject.next(term);
  }

  public setSearchType(type: MediaType): void {
    this._searchTypeSubject.next(type);
  }

  public nextPage(page: number): void {
    this._paginationSubject.next(this._paginationSubject.value + page);
  }

  public resetPage(): void {
    this._paginationSubject.next(0);
  }

  public updateQueryParams(): void {
    const term = this._searchTermSubject.value;
    const type = this._searchTypeSubject.value;
    if (term) {
      this._router.navigate(['/search', term, type]);
    } else {
      this._router.navigate(['/search']);
    }
  }
}
