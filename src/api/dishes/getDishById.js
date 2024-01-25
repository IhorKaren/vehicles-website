import { privateInstance } from "../axios";

export const getDishById = async (dishId) => {
  const { data } = await privateInstance.get(`dishes/${dishId}`);

  return data;
};
