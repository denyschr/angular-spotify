import { Followers, MediaResponseBody, MediaItemBody, MediaItemType } from '.';

export interface Playlist extends MediaItemBody {
  collaborative: boolean;
  description: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: MediaItemType.Playlist;
}

export interface Owner extends Omit<MediaItemBody, 'images' | 'name'> {
  followers: Followers;
  type: 'user';
  display_name: string;
}

interface Tracks {
  href: string;
  total: number;
}

export interface Playlists extends MediaResponseBody<Playlist> {
  items: Playlist[];
}

export interface PlaylistsResponse {
  playlists: Playlists;
}
