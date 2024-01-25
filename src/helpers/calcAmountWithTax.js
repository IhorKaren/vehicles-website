import { normalizeDecimal } from "./normalizeDecimal.js";

export const calcAmountWithTax = (amount, tax = 20) => {
  return normalizeDecimal(amount / (1 - tax / 100));
};
