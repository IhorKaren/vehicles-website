import { privateInstance } from "../axios";

export const markNotificationAsRead = async (notificationId) => {
  const { data } = await privateInstance.patch(
    `/notifications/${notificationId}/read`,
  );

  return data;
};
