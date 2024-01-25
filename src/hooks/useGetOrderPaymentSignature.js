import { getOrderPaymentSignature } from "@/api";
import { queryKey } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export const useGetOrderPaymentSignature = (orderId) => {
  const result = useQuery({
    queryKey: [queryKey.ORDER_STATUS, orderId],
    queryFn: async () => getOrderPaymentSignature(orderId),
  });

  return result;
};
