import { Albums, Artists, Playlists, Tracks } from '../models';

export interface SearchResponse {
  searchResults: number;
  albums: Albums;
  artists: Artists;
  playlists: Playlists;
  tracks: Tracks;
}
