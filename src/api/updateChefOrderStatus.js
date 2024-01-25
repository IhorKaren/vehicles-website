import { privateInstance } from "./axios";

export const updateChefOrderStatus = async (orderId, status) => {
  const { data } = await privateInstance.patch(`chefs/orders/${orderId}`, {
    status,
  });

  return data;
};
