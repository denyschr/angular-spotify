import { Album, Artist, Audiobook, Episode, Playlist, Podcast } from '.';

export interface MediaContent {
  items: (Album | Artist | Playlist | Podcast | Episode | Audiobook)[];
  isAlbumDate?: boolean;
  isImageRounded?: boolean;
}
