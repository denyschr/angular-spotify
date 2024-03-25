import { Image, ItemCollection } from '../models';

export interface Album {
  album_type: AlbumType;
  artists: ArtistAlbum[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: 'album';
  uri: string;
}

export interface ArtistAlbum {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export enum AlbumType {
  Album = 'album',
  Compilation = 'compilation',
  Single = 'single',
  Ep = 'ep'
}

export interface Albums extends ItemCollection<Album> {
  items: Album[];
}

export interface AlbumsResponse {
  albums: Albums;
}
