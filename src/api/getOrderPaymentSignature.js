import { privateInstance } from "./axios";

export const getOrderPaymentSignature = async (orderId) => {
  const { data } = await privateInstance.get(`/orders/payment/${orderId}`);

  return data;
};
