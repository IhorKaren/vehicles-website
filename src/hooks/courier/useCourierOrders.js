import { getCourierOrders } from "@/api/courier/getCourierOrders";
import { useQuery } from "@tanstack/react-query";

const useCourierOrder = () => {
  const fetchCourierOrders = async () => {
    try {
      const data = await getCourierOrders();
      return data;
    } catch (error) {
      console.log("Error fetching orders");
      throw error;
    }
  };

  return useQuery({
    queryKey: [],
    queryFn: fetchCourierOrders,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useCourierOrder;
