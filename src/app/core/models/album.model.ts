import { MediaResponseBody, MediaItemBody, MediaItemType, Restrictions } from '.';

export interface Album extends MediaItemBody {
  album_type: AlbumType;
  total_tracks: number;
  available_markets: string[];
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: MediaItemType.Album;
  artists: AlbumArtist[];
}

export const enum AlbumType {
  Album = 'album',
  Compilation = 'compilation',
  Single = 'single',
  Ep = 'ep'
}

export interface AlbumArtist extends Omit<MediaItemBody, 'images'> {
  type: string;
}

export interface Albums extends MediaResponseBody<Album> {
  items: Album[];
}

export interface AlbumsResponse {
  albums: Albums;
}
