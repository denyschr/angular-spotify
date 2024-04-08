import { Followers, MediaBodyResponse, MediaItem } from '.';

export interface Playlist extends MediaItem {
  collaborative: boolean;
  description: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: 'playlist';
}

export interface Owner extends Omit<MediaItem, 'images' | 'name'> {
  followers: Followers;
  type: 'user';
  display_name: string;
}

interface Tracks {
  href: string;
  total: number;
}

export interface Playlists extends MediaBodyResponse<Playlist> {
  items: Playlist[];
}
