import { privateInstance } from "../axios";

export const deleteCartItem = async (userId, dishId) => {
  const { data } = await privateInstance.delete(
    `/users/${userId}/cart/${dishId}`,
  );

  return data;
};
