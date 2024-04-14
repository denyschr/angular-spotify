import { Albums, Artists, Playlists, Tracks } from '.';

export interface SearchResponse {
  searchResults: number;
  mediaTypes: string[];
  albums: Albums;
  artists: Artists;
  playlists: Playlists;
  tracks: Tracks;
}
