import { Followers, MediaResponse, MediaItemContent, MediaType, Track, Owner } from '.';

export interface Playlist extends MediaItemContent {
  collaborative: boolean;
  description: string | null;
  followers: Followers;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: PlaylistTracks;
  type: typeof MediaType.playlist;
}

export interface PlaylistTrack {
  added_at: string | null;
  added_by: string | null;
  is_local: boolean;
  track: Track;
}

export interface PlaylistTracks extends MediaResponse {
  items: PlaylistTrack[];
}

export interface Playlists extends MediaResponse {
  items: Playlist[];
}

export interface PlaylistsResponse {
  playlists: Playlists;
}
