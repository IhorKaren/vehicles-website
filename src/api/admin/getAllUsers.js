import { privateInstance } from "../axios";

export const getAllUsers = async () => {
  const response = await privateInstance.get(`/users`);
  return response.data;
};
