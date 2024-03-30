import { Album, Artist, Audiobook, Episode, Playlist, Show } from '../models';

export interface MusicContent {
  items: (Album | Artist | Playlist | Show | Episode | Audiobook)[];
  isAlbumDate?: boolean;
  isImageRounded?: boolean;
}
