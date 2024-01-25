import { privateInstance } from "../axios";

export const getFavorite = async (userId, type) => {
  const { data } = await privateInstance(`/users/${userId}/favorite/${type}`);

  return data;
};
