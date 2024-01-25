import { privateInstance } from "../axios";

export const addFavorite = async (userId, type, favoriteId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = { favoriteId };
  const { response } = await privateInstance.post(
    `/users/${userId}/favorite/${type}`,
    data,
    config,
  );
  return response;
};
