export enum Colors {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TETRIARY = 'tetriary',
  SUCCESS = 'success',
  DANGER = 'danger',
  INFO = 'info',
}

export enum btnType {
  SQUARE = 'SQUARE',
  OUTLINE = 'OUTLINE',
  ROUND = 'ROUND',
  CIRCULAR = 'CIRCULAR',
}

export interface btnOptions {
  type: btnType;
  color: Colors;
  iconPosition: 'none' | 'lead' | 'trail';
  icon: string;
}
export type buttonOptions = Partial<btnOptions>;
