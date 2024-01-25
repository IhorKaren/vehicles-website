export const normalizeDecimal = (number, decimalPlaces = 2) => {
  const multiplier = Math.pow(10, decimalPlaces);
  const roundedNumber = Math.round(number * multiplier) / multiplier;

  return roundedNumber;
};
