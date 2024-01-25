import { privateInstance } from "../axios";

export const deleteNotification = async (notificationId) => {
  const { data } = await privateInstance.delete(
    `/notifications/${notificationId}`,
  );

  return data;
};
