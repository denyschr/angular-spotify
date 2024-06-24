import { ExternalUrls, MediaType, Track } from '.';

export interface RecentPlayedTracks {
  href: string;
  limit: number;
  next: string;
  cursors: Cursors;
  total: number;
  items: PlayHistory[];
}

export interface Cursors {
  after: string;
  before: string;
}

export interface PlayHistory {
  track: Track;
  played_at: string;
  context: Context;
}

export interface Context {
  href: string;
  type: MediaType;
  external_urls: ExternalUrls;
  uri: string;
}
