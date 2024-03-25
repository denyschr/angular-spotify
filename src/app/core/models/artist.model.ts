import { ExternalUrls, Image, ItemCollection } from '../models';

export interface Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: 'artist';
  uri: string;
}

export interface Artists extends ItemCollection<Artist> {
  items: Artist[];
}

export interface Followers {
  href: null | string;
  total: number;
}

export interface ArtistsResponse {
  artists: Artist[];
}
