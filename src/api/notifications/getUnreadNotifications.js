import { privateInstance } from "../axios";

export const getUnreadNotifications = async () => {
  const { data } = await privateInstance.get("/notifications");

  return data;
};
