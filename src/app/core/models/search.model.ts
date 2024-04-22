import { Albums, Artists, MediaType, Playlists, Tracks } from '.';

export interface SearchResponse {
  searchResults: number;
  mediaTypes: MediaType[];
  albums: Albums;
  artists: Artists;
  playlists: Playlists;
  tracks: Tracks;
}
