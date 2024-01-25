import { publicInstance } from "../axios";

export const getReviewsByDishId = async (id, page = 1, limit = 10) => {
  const { data } = await publicInstance.get(
    `reviews/by-dish/${id}?page=${page}&limit=${limit}`,
  );

  return data;
};
