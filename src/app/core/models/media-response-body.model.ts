export interface MediaResponseBody<TItem> {
  href: string;
  items: TItem[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}
