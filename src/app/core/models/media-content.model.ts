import { Album, Artist, Playlist } from '.';

export interface MediaContent {
  items: (Album | Artist | Playlist)[];
  isAlbumDate?: boolean;
}
