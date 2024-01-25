import { toDelivery } from "@/constants/mocks";

export const statusToShow = (value) => {
  return value === "readyToDelivery" ? toDelivery : value;
};
