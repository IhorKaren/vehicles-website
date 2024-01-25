import { privateInstance } from "./axios";

export const updateUser = async (userData, userId) => {
  const { data } = await privateInstance.patch(`/users/${userId}`, userData);

  return data;
};
