import { Colors } from './common';

export enum btnType {
  DEFAULT = 'DEFAULT',
  SQUARE = 'SQUARE',
  OUTLINE = 'OUTLINE',
  CIRCULAR = 'CIRCULAR',
}

export interface btnOptions {
  type: btnType;
  color: Colors;
  icon?: string;
  iconPosition?: 'none' | 'lead' | 'trail';
}
