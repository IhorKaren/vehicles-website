import { privateInstance } from "../axios";

export const getCourierOrders = async () => {
  const { data } = await privateInstance.get(`/couriers/orders`);

  return data;
};
