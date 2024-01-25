import { privateInstance } from "../axios";

export const getNotifications = async ({ read, role } = {}) => {
  const params = {};

  if (read !== undefined) {
    params.read = read;
  }

  if (role) {
    params.role = role;
  }

  const { data } = await privateInstance.get("/notifications", { params });

  return data;
};
