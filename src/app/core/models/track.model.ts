import { Album, Artist, Episode, MediaBodyResponse, MediaItem } from '../models';

export interface Track
  extends Omit<MediaItem, 'images'>,
    Pick<Album, 'available_markets' | 'restrictions'>,
    Pick<Episode, 'duration_ms' | 'explicit' | 'is_playable'> {
  album: Album;
  artists: Artist;
  disc_number: number;
  external_ids: ExternalIds;
  linked_from: unknown;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: 'track';
  is_local: boolean;
}

export interface ExternalIds {
  isrc: string;
  ean: string;
  upc: string;
}

export interface Tracks extends MediaBodyResponse<Track> {
  items: Track[];
}
