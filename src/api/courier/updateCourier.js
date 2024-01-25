import { privateInstance } from "../axios";

export const updateCourier = async (courierData, courierId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await privateInstance.patch(
    `/couriers/${courierId}`,
    courierData,
    config,
  );
  return response.data;
};
