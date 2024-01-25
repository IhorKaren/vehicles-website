import { publicInstance } from "./axios";

export const getPopularChefs = async () => {
  const { data } = await publicInstance.get(`/chefs/popular`);

  return data;
};
