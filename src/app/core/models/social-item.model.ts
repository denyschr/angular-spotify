import { MenuItem } from '.';

export interface SocialItem extends Required<Pick<MenuItem, 'icon'>>, Omit<MenuItem, 'name' | 'icon'> {}
