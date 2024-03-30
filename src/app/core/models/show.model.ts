import { Audiobook, Episode, MediaCollection, MediaItem } from '../models';

export interface Show
  extends MediaItem,
    Pick<
      Audiobook,
      'available_markets' | 'copyrights' | 'description' | 'explicit' | 'languages' | 'media_type' | 'publisher'
    >,
    Pick<Episode, 'html_description' | 'is_externally_hosted'> {
  type: 'show';
  total_episodes: number;
}

export interface Shows extends MediaCollection<Show> {
  items: Show[];
}
