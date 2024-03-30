import { Copyright, MediaCollection, MediaItem } from '../models';

export interface Audiobook extends MediaItem {
  authors: Author[];
  available_markets: string[];
  copyrights: Copyright[];
  description: string;
  html_description: string;
  edition: string;
  explicit: boolean;
  languages: string[];
  media_type: string;
  narrators: Narrator[];
  publisher: string;
  type: 'audiobook';
  total_chapters: number;
}

export interface Author {
  name: string;
}

export interface Narrator {
  name: string;
}

export interface Audiobooks extends MediaCollection<Audiobook> {
  items: Audiobook[];
}
