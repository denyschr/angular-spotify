import { Copyright, MediaItemContent, MediaType } from '.';

export interface Show extends MediaItemContent {
  available_markets: string[];
  copyrights: Copyright;
  description: string;
  html_description: string;
  explicit: boolean;
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  publisher: string;
  type: typeof MediaType.show;
  total_episodes: number;
}
