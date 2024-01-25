import { privateInstance } from "../axios";

export const getDailyProfit = async () => {
  const response = await privateInstance.get(`/admin/statistic/payment`);
  return response.data;
};
