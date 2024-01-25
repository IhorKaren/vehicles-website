import { privateInstance } from "../axios";

export const getCartItems = async (userId) => {
  const { data } = await privateInstance(`/users/${userId}/cart`);

  return data;
};
