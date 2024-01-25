import { privateInstance } from "../axios";

export const updateChefAccountStatus = async (chefData, chefId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await privateInstance.patch(
    `/chefs/${chefId}/account-status`,
    chefData,
    config,
  );
  return response.data;
};
