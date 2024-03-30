import { Album, Audiobook, MediaCollection, MediaItem } from '../models';

export interface Episode
  extends MediaItem,
    Pick<Album, 'release_date' | 'release_date_precision' | 'restrictions'>,
    Pick<Audiobook, 'description' | 'html_description' | 'explicit' | 'languages'> {
  audio_preview_url: string | null;
  duration_ms: number;
  is_externally_hosted: boolean;
  is_playable: boolean;
  resume_point: ResumePoint;
  type: 'episode';
}

export interface ResumePoint {
  fully_played: boolean;
  resume_position_ms: number;
}

export interface Episodes extends MediaCollection<Episode> {
  items: Episode[];
}
