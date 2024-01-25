import { privateInstance } from "../axios";

export const getCourierById = async ({ courierId }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await privateInstance.get(`/couriers/${courierId}`, config);
  return response.data;
};
