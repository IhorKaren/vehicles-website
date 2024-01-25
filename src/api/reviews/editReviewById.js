import { privateInstance } from "../axios";

export const editReview = async ({ rating, review, dishId, reviewId }) => {
  await privateInstance.put(`reviews/${reviewId}`, {
    rating,
    review,
    dish: dishId,
  });

  return;
};
