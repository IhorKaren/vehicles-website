import { privateInstance } from "../axios";

export const getChefById = async (chefId) => {
  const response = await privateInstance.get(`/chefs/${chefId}`);
  return response.data;
};
