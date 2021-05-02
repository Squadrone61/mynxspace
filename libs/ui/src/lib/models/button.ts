import { Colors } from './common';

export enum btnType {
  DEFAULT = 'default',
  SQUARE = 'square',
  OUTLINE = 'outline',
  CIRCULAR = 'circular',
}

export interface btnOptions {
  type: btnType;
  color: Colors;
  icon?: string;
  iconPosition?: 'none' | 'lead' | 'trail';
}
