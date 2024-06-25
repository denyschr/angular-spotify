import {
  Album,
  Artist,
  MediaResponse,
  MediaItemContent,
  MediaType,
  ExternalIds,
  Restrictions,
  Cursors,
  PlayHistory
} from '.';

export interface Track extends Omit<MediaItemContent, 'images'> {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  is_playable: boolean;
  linked_from: unknown;
  restrictions: Restrictions;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: typeof MediaType.track;
  is_local: boolean;
}

export interface Tracks extends MediaResponse {
  items: Track[];
}

export interface RecentPlayedTracks extends Omit<MediaResponse, 'offset' | 'previous'> {
  cursors: Cursors;
  items: PlayHistory[];
}

export interface UserTopTracks extends MediaResponse {
  items: Track[];
}

export interface TracksResponse {
  tracks: Tracks;
}
