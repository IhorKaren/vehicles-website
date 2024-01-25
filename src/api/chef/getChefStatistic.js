import { privateInstance } from "../axios";

export const getChefStatistic = async (chefId) => {
  const response = await privateInstance.get(`/chefs/${chefId}/statistic`);
  return response.data;
};
