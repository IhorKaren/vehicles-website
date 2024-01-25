import { getChefStatistic } from "@/api/chef/getChefStatistic";
import { useQuery } from "@tanstack/react-query";

const useGetChefStatistic = (chefId) => {
  const fetchChefStatistic = async () => {
    const data = await getChefStatistic(chefId);
    return data;
  };

  return useQuery({
    queryKey: ["chefs", "statistic"],
    queryFn: fetchChefStatistic,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useGetChefStatistic;
