import { privateInstance } from "../axios";

export const getCourierStatistic = async (courierId) => {
  const response = await privateInstance.get(
    `/couriers/${courierId}/statistic`,
  );
  return response.data;
};
