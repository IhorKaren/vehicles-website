import { publicInstance } from "./axios";

export const getIngredients = async () => {
  const { data } = await publicInstance.get("/ingredients");

  return data;
};
