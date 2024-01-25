import { privateInstance } from "../axios";

export const getAllOrders = async ({ pageParam = 1, limit = 10 }) => {
  const { data } = await privateInstance.get(
    `/admin/allorders?page=${pageParam}&limit=${limit}`,
  );

  return data;
};
