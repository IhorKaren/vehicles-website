import { privateInstance } from "./axios";

export const createOrder = async (order) => {
  const { data } = await privateInstance.post("/orders", order);

  return data;
};
