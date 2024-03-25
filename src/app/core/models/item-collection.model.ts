export interface ItemCollection<T> {
  href: string;
  items: T[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}
