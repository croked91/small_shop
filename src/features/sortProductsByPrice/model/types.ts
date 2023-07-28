export const sortDirections = {
  ASC: 'asc',
  DESC: 'desc'
} as const;

export type SortDirectionsT = typeof sortDirections[keyof typeof sortDirections];
