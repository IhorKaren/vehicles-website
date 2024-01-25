import { privateInstance } from "../axios";

export const createDish = async (dish) => {
  const { data } = await privateInstance.post("/dishes", dish);

  return data;
};
