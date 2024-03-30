import { Albums, Artists, Audiobooks, Episodes, Playlists, Shows, Tracks } from '../models';

export interface SearchResponse {
  searchResults: number;
  albums: Albums;
  artists: Artists;
  shows: Shows;
  playlists: Playlists;
  tracks: Tracks;
  episodes: Episodes;
  audiobooks: Audiobooks;
}
