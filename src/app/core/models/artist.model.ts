import { Followers, MediaResponse, MediaItemContent, MediaType } from '.';

export interface Artist extends MediaItemContent {
  followers: Followers;
  genres: string[];
  popularity: number;
  type: typeof MediaType.artist;
}

export interface Artists extends MediaResponse {
  items: Artist[];
}

export interface ArtistsResponse {
  artists: Artists;
}
