import { Album, Albums, Artist, Artists, MediaType, Playlist, Playlists, Track, Tracks } from '.';

export interface SearchResponse {
  totalResults: number;
  mediaTypes: MediaType[];
  results: SearchResultsArray;
}

export interface SearchResultsArray {
  albums: Album[];
  artists: Artist[];
  tracks: Track[];
  playlists: Playlist[];
}

export interface SearchResults {
  albums: Albums;
  artists: Artists;
  tracks: Tracks;
  playlists: Playlists;
}
