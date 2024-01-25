import { privateInstance } from "../axios";

export const getCouriersOrdersByStatus = async (orderStatus, country, city) => {
  const { data } = await privateInstance.get(
    `/couriers/allorders/${orderStatus}/${country}/${city}`,
  );

  return data;
};
