import { Artist, ExternalUrls, Followers, Image, MediaResponse, Track } from '.';

export interface UserProfile {
  country: string;
  display_name: string;
  explicit_content: ExplicitContent;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: 'user';
  uri: string;
}

export interface ExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface UserTopArtists extends MediaResponse {
  items: Artist[];
}

export interface UserTopTracks extends MediaResponse {
  items: Track[];
}
