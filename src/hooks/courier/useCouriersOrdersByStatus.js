import { getCouriersOrdersByStatus } from "@/api/courier/getCouriersOrdersByStatus";
import { useQuery } from "@tanstack/react-query";

const useCouriersOrdersByStatus = (orderStatus, country, city) => {
  const fetchOrdersByStatus = async () => {
    const data = await getCouriersOrdersByStatus(orderStatus, country, city);
    return data;
  };

  return useQuery({
    queryKey: ["allorders", orderStatus, country, city],
    queryFn: fetchOrdersByStatus,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useCouriersOrdersByStatus;
