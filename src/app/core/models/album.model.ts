import { MediaBodyResponse, MediaItem, Restrictions } from '../models';

export interface Album extends MediaItem {
  album_type: AlbumType;
  total_tracks: number;
  available_markets: string[];
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: 'album';
  artists: AlbumArtist[];
}

export enum AlbumType {
  Album = 'album',
  Compilation = 'compilation',
  Single = 'single',
  Ep = 'ep'
}

export interface AlbumArtist extends Omit<MediaItem, 'images'> {
  type: string;
}

export interface Albums extends MediaBodyResponse<Album> {
  items: Album[];
}

export interface AlbumsResponse {
  albums: Albums;
}
