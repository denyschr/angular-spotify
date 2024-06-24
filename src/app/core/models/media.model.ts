import { ExternalUrls, Image, Album, Artist, Playlist, Track } from '.';

export interface MediaResponse {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface MediaItemContent {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  type: MediaType;
  uri: string;
}

export type MediaItem = Album | Artist | Playlist | Track;

export const MediaType = {
  album: 'album',
  artist: 'artist',
  playlist: 'playlist',
  track: 'track',
  episode: 'episode',
  show: 'show'
} as const;

export type MediaType = (typeof MediaType)[keyof typeof MediaType];

export const MediaSectionType = {
  all: 'all',
  albums: 'albums',
  artists: 'artists',
  playlists: 'playlists',
  tracks: 'tracks'
} as const;

export type MediaSectionType = (typeof MediaSectionType)[keyof typeof MediaSectionType];
