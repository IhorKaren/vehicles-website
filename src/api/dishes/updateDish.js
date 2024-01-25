import { privateInstance } from "../axios";

export const updateDish = async (dishId, dish) => {
  const { data } = await privateInstance.patch(`/dishes/${dishId}`, dish);

  return data;
};
