export const buttonTypes = {
  OUTLINED: 'outlined',
  FILLED: 'filled',
  LINK: 'link'
} as const;

export type ButtonTypesT = typeof buttonTypes[keyof typeof buttonTypes];

export const buttonSizes = {
  M: 'm',
  L: 'l'
} as const;

export type ButtonSizesT = typeof buttonSizes[keyof typeof buttonSizes];
