import { Albums, Artists, Audiobooks, Episodes, Playlists, Podcasts, Tracks } from '../models';

export interface SearchResponse {
  searchResults: number;
  albums: Albums;
  artists: Artists;
  shows: Podcasts;
  playlists: Playlists;
  tracks: Tracks;
  episodes: Episodes;
  audiobooks: Audiobooks;
}
