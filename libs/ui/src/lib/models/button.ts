import { Colors } from './common';

export enum btnType {
  DEFAULT = 'DEFAULT',
  SQUARE = 'SQUARE',
  OUTLINE = 'OUTLINE',
  CIRCULAR = 'CIRCULAR',
  PLAIN = 'PLAIN',
}

export interface btnOptions {
  type: btnType;
  color: Colors;
  icon?: string;
  iconPosition?: 'none' | 'lead' | 'trail';
}
