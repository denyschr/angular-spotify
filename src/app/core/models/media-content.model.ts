import { Album, Artist, Playlist, Track } from '.';

export interface MediaContent {
  items: (Album | Artist | Playlist | Track)[];
  isAlbumDate?: boolean;
}
