import { publicInstance } from "../axios";

export const getRandomDish = async () => {
  const { data } = await publicInstance.get("/dishes/random");

  return data;
};
