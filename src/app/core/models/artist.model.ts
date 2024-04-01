import { Followers, MediaBodyResponse, MediaItem } from '../models';

export interface Artist extends MediaItem {
  followers: Followers;
  genres: string[];
  popularity: number;
  type: 'artist';
}

export interface Artists extends MediaBodyResponse<Artist> {
  items: Artist[];
}

export interface ArtistsResponse {
  artists: Artist[];
}
