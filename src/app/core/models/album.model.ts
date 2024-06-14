import {
  MediaResponse,
  MediaItemContent,
  MediaType,
  Restrictions,
  ExternalUrls,
  Tracks,
  Copyright,
  ExternalIds,
  ExactDate
} from '.';

export interface Album extends MediaItemContent {
  album_type: AlbumType;
  total_tracks: number;
  available_markets: string[];
  release_date: string;
  release_date_precision: ExactDate;
  restrictions: Restrictions;
  type: MediaType.Album;
  artists: AlbumArtist[];
  tracks: Tracks;
  copyrights: Copyright;
  externalIds: ExternalIds;
  genres: string[];
  label: string;
  popularity: number;
}

export const enum AlbumType {
  Album = 'album',
  Compilation = 'compilation',
  Single = 'single'
}

export interface AlbumArtist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  uri: string;
  type: string;
}

export interface Albums extends MediaResponse<Album> {
  items: Album[];
}

export interface AlbumsResponse {
  albums: Albums;
}
