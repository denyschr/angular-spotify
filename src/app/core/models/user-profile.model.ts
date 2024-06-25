import { ExplicitContent, ExternalUrls, Followers, Image } from '.';

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
