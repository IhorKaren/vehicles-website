import { privateInstance } from "../axios";

export const getDishChefOwn = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await privateInstance.get(`/dishes/own`, config);
  return response.data;
};
