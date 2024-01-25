import { privateInstance } from "../axios";

export const updateCartItemById = async (userId, body) => {
  const { data } = await privateInstance.patch(`/users/${userId}/cart`, body);

  return data;
};
