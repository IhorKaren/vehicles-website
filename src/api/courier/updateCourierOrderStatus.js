import { privateInstance } from "../axios";

export const updateCourierOrderStatus = async (orderId, status) => {
  const { data } = await privateInstance.patch(`couriers/orders/${orderId}`, {
    status,
  });

  return data;
};
