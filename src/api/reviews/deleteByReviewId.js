import { privateInstance } from "../axios";

export const deleteByReviewId = async (id) => {
  await privateInstance.delete(`reviews/${id}`);
};
