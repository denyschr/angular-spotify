import { ExternalUrls, Image, Album, Artist, Playlist, Track } from '.';

export interface MediaResponse<MediaItem> {
  href: string;
  items: MediaItem[];
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

export enum MediaType {
  Album = 'album',
  Artist = 'artist',
  Playlist = 'playlist',
  Track = 'track',
  Episode = 'episode',
  Show = 'show'
}

export enum MediaSectionType {
  All = 'all',
  Albums = 'albums',
  Artists = 'artists',
  Playlists = 'playlists',
  Tracks = 'tracks'
}
