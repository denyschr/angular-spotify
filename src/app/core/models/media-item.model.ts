import { Album, Artist, ExternalUrls, Image, Playlist, Track } from '.';
export interface MediaItemBody {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  uri: string;
}

export type MediaItem = Album | Artist | Playlist | Track;

export enum MediaItemType {
  Album = 'album',
  Artist = 'artist',
  Playlist = 'playlist',
  Track = 'track'
}
