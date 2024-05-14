import { Album, Artist, MediaType, Playlist, Track } from '.';

export interface SearchResponse {
  totalResults: number;
  mediaTypes: MediaType[];
  results: SearchResults;
}

export interface SearchResults {
  albums: Album[];
  artists: Artist[];
  tracks: Track[];
  playlists: Playlist[];
}
