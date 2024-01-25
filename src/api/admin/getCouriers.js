import { privateInstance } from "../axios";

export const getCouriers = async ({ pageParam = 1, limit = 10 }) => {
  const { data } = await privateInstance.get(
    `/couriers/?page=${pageParam}&limit=${limit}`,
  );

  return data;
};
