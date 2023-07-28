export const formatNumberWithSpaceSeparator = (number: number) => (
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
);
