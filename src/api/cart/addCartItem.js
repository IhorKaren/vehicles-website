import { privateInstance } from "../axios";

export const addCartItem = async (userId, body) => {
  const { data } = await privateInstance.post(`/users/${userId}/cart`, body);

  return data;
};
