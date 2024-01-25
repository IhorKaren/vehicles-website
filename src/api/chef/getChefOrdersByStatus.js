import { privateInstance } from "../axios";

export const getChefOrdersByStatus = async (orderStatus) => {
  const { data } = await privateInstance.get(`/chefs/orders/${orderStatus}`);

  return data;
};
