import { Followers, MediaResponse, MediaItemContent, MediaType } from '.';

export interface Artist extends MediaItemContent {
  followers: Followers;
  genres: string[];
  popularity: number;
  type: MediaType.Artist;
}

export interface Artists extends MediaResponse<Artist> {
  items: Artist[];
}

export interface ArtistsResponse {
  artists: Artists;
}
