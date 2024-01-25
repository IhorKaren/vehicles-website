import { privateInstance } from "../axios";

export const getUsersStatistic = async () => {
  const response = await privateInstance.get(`/admin/statistic/users`);
  return response.data;
};
