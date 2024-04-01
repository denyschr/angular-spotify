import { Audiobook, Episode, MediaBodyResponse, MediaItem } from '.';

export interface Podcast
  extends MediaItem,
    Pick<
      Audiobook,
      'available_markets' | 'copyrights' | 'description' | 'explicit' | 'languages' | 'media_type' | 'publisher'
    >,
    Pick<Episode, 'html_description' | 'is_externally_hosted'> {
  type: 'show';
  total_episodes: number;
}

export interface Podcasts extends MediaBodyResponse<Podcast> {
  items: Podcast[];
}
