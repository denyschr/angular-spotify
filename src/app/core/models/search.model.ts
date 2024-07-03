import {
  Album,
  Albums,
  Artist,
  Artists,
  MediaSectionType,
  Playlist,
  Playlists,
  Track,
  Tracks
} from '.';

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
  albums: { items: Album[]; type: typeof MediaSectionType.albums };
  artists: { items: Artist[]; type: typeof MediaSectionType.artists };
  tracks: { items: Track[]; type: typeof MediaSectionType.tracks };
  playlists: { items: Playlist[]; type: typeof MediaSectionType.playlists };
}
