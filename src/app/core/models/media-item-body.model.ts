import { ExternalUrls, Image } from '.';

export interface MediaItemBody {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  uri: string;
}
