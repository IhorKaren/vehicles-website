import { privateInstance } from "../axios";

export const addReview = async ({ rating, review, dishId }) => {
  await privateInstance.post(`reviews`, { rating, review, dish: dishId });

  return;
};
