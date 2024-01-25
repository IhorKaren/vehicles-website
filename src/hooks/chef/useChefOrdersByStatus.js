import { getChefOrdersByStatus } from "@/api/chef/getChefOrdersByStatus";
import { useQuery } from "@tanstack/react-query";

const useChefOrdersByStatus = (orderStatus) => {
  const fetchOrdersByStatus = async () => {
    const data = await getChefOrdersByStatus(orderStatus);
    return data;
  };

  return useQuery({
    queryKey: ["orders", orderStatus],
    queryFn: fetchOrdersByStatus,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useChefOrdersByStatus;
