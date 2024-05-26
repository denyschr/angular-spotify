import { Followers, MediaResponseBody, MediaItemBody, MediaItemType } from '.';

export interface Artist extends MediaItemBody {
  followers: Followers;
  genres: string[];
  popularity: number;
  type: MediaItemType.Artist;
}

export interface Artists extends MediaResponseBody<Artist> {
  items: Artist[];
}

export interface ArtistsResponse {
  artists: Artists;
}
