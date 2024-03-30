import { MenuItem } from '../models';

export interface SocialItem extends Required<Pick<MenuItem, 'icon'>>, Omit<MenuItem, 'name' | 'icon'> {}
