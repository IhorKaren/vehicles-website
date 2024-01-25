import { getDailyProfit } from "@/api/admin/getDailyProfit";
import { useQuery } from "@tanstack/react-query";

const useGetDailyProfit = () => {
  const fetchDailyProfit = async () => {
    try {
      const data = await getDailyProfit();
      return data;
    } catch (error) {
      console.log("Error fetching profit");
    }
  };

  return useQuery({
    queryKey: ["admin", "profit"],
    queryFn: fetchDailyProfit,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useGetDailyProfit;
