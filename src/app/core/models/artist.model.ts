import { Followers, MediaCollection, MediaItem } from '../models';

export interface Artist extends MediaItem {
  followers: Followers;
  genres: string[];
  popularity: number;
  type: 'artist';
}

export interface Artists extends MediaCollection<Artist> {
  items: Artist[];
}

export interface ArtistsResponse {
  artists: Artist[];
}
