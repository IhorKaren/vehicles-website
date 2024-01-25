import { privateInstance } from "../axios";

export const deleteFavorite = async (userId, type, favoriteId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { response } = await privateInstance.delete(
    `/users/${userId}/favorite/${type}/${favoriteId}`,
    config,
  );
  return response;
};
