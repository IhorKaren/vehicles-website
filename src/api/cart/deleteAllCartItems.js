import { privateInstance } from "../axios";

export const deleteAllCartItems = async (userId) => {
  const { data } = await privateInstance.delete(`/users/${userId}/cart`);

  return data;
};
