import { calcAmountWithTax } from "./calcAmountWithTax";
import { normalizeDecimal } from "./normalizeDecimal";

export const calcTotalAmountOfCartItems = (
  items,
  includeUnavailable = true,
) => {
  const total = items.reduce(
    (acc, item) =>
      includeUnavailable || item.dish.isAvailable
        ? normalizeDecimal(acc + item.dish.price * item.count)
        : acc,
    0,
  );

  return total;
};

export const calcOrderSummary = (items, deliveryAmount) => {
  // Get total amount of all items in cart
  const subtotal = calcTotalAmountOfCartItems(items);
  // Get separated amount of chef and site tax
  const chef = normalizeDecimal(subtotal * (1 - 0.6 / 100));
  const site = normalizeDecimal((subtotal * 0.6) / 100);

  const delivery = deliveryAmount;

  // calculate total order amount with bank commission
  const total = normalizeDecimal(
    calcAmountWithTax(chef) +
      calcAmountWithTax(site) +
      calcAmountWithTax(delivery),
  );

  return {
    subtotal,
    delivery,
    tax: normalizeDecimal(total - subtotal - delivery),
    total,
  };
};

export const calcTotalQtyOfCartItems = (items, includeUnavailable = true) => {
  const totalQty = items.reduce(
    (acc, item) =>
      includeUnavailable || item.dish.isAvailable
        ? normalizeDecimal(acc + item.count)
        : acc,
    0,
  );

  return totalQty;
};
