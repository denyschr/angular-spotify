import { ExternalUrls, Image } from '../models';

export interface MediaItem {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  uri: string;
}
