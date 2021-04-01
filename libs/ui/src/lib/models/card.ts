export enum cardType {
  DEFAULT,
  CUSTOM,
}
export interface cardOptions {
  type: cardType;
  customClasses?: string;
}
