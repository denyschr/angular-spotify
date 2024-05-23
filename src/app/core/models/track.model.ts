import { Album, Artist, MediaResponseBody, MediaItemBody, MediaItemType } from '.';

export interface Track extends Omit<MediaItemBody, 'images'>, Pick<Album, 'available_markets' | 'restrictions'> {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  is_playable: boolean;
  linked_from: unknown;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: MediaItemType.Track;
  is_local: boolean;
}

export interface ExternalIds {
  isrc: string;
  ean: string;
  upc: string;
}

export interface Tracks extends MediaResponseBody<Track> {
  items: Track[];
}

export interface TracksResponse {
  tracks: Tracks;
}
