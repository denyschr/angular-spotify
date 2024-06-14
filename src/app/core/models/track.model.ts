import {
  Album,
  Artist,
  MediaResponse,
  MediaItemContent,
  MediaType,
  ExternalIds,
  Restrictions
} from '.';

export interface Track extends MediaItemContent {
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
  type: MediaType.Track;
  is_local: boolean;
}

export interface Tracks extends MediaResponse<Track> {
  items: Track[];
}

export interface TracksResponse {
  tracks: Tracks;
}
