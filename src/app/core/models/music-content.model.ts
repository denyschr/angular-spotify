import { Album, Artist } from '../models';

export interface MusicContent {
  items: (Album | Artist)[];
  isAlbumDate?: boolean;
  isImageRounded?: boolean;
}
