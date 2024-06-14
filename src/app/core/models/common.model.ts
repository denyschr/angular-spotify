export interface Copyright {
  text: string;
  type: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface ExternalIds {
  isrc: string;
  ean: string;
  upc: string;
}

export interface Followers {
  href: null | string;
  total: number;
}

export interface Image {
  url: string;
  width: number | null;
  height: number | null;
}

export interface Restrictions {
  reason: string;
}

export const enum ExactDate {
  Year = 'year',
  Month = 'month',
  Day = 'day'
}

export interface ResumePoint {
  fully_played: boolean;
  resume_position_ms: number;
}

export interface Owner {
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string | null;
}
