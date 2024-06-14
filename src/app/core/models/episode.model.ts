import { ExactDate, MediaItemContent, MediaType, Restrictions, ResumePoint } from '.';

export interface Episode extends MediaItemContent {
  audio_preview_url: string | null;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  is_externally_hosted: boolean;
  is_playable: boolean;
  languages: string[];
  release_date: string;
  release_date_precision: ExactDate;
  resume_point: ResumePoint;
  type: MediaType.Episode;
  restrictions: Restrictions;
}
