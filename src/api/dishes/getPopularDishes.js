import { publicInstance } from "../axios";

export const getPopularDishes = async () => {
  const { data } = await publicInstance.get("/dishes/popular");

  return data;
};
