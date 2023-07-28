export const TextSizes = {
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl'
} as const;

export type TextSizesT = typeof TextSizes[keyof typeof TextSizes];

export const TextFontFams = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const;

export type TextFontFamsT = typeof TextFontFams[keyof typeof TextFontFams];
