import { privateInstance } from "../axios";

export const getUserOrders = async (userId, page, limit) => {
  const { data } = await privateInstance.get(
    `/users/${userId}/orders?page=${page}&limit=${limit}`,
  );

  return data;
};
