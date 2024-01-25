import { privateInstance } from "./axios";

export const getChefOrders = async () => {
  const { data } = await privateInstance.get("/chefs/orders");

  return data;
};
