export const calculateTotalOrdersSum = (orders = []) => {
  if (!orders.length) return;

  return orders.reduce((total, order) => {
    return total + order.totalPrice;
  }, 0);
};
