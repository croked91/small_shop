export const TitleSizes = {
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl'
} as const;

export type TitleSizesT = typeof TitleSizes[keyof typeof TitleSizes];

export const TitleFontFams = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const;

export type TitleFontFamT = typeof TitleFontFams[keyof typeof TitleFontFams];
