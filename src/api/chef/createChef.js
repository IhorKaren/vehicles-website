import { privateInstance } from "../axios";

export const createChef = async (chefData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { response } = await privateInstance.post(`/chefs`, chefData, config);
  return response;
};
