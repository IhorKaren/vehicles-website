import { privateInstance } from "../axios";

export const updateCourierAccountStatus = async (courierData, courierId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await privateInstance.patch(
    `/couriers/${courierId}/account-status`,
    courierData,
    config,
  );
  return response.data;
};
