import { Album, Albums, Artist, Artists, Playlist, Playlists, Track, Tracks } from '.';

export interface Search {
  total: number;
  results: SearchResults;
}

export interface SearchResponse {
  albums: Albums;
  artists: Artists;
  tracks: Tracks;
  playlists: Playlists;
}

export interface SearchResults {
  albums: Album[];
  artists: Artist[];
  tracks: Track[];
  playlists: Playlist[];
}
