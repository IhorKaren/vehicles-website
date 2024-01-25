import { getCourierStatistic } from "@/api/courier/getCourierStatistic";
import { useQuery } from "@tanstack/react-query";

const useGetCourierStatistic = (courierId) => {
  const fetchCourierStatistic = async () => {
    const data = await getCourierStatistic(courierId);
    return data;
  };

  return useQuery({
    queryKey: ["couriers", "statistic"],
    queryFn: fetchCourierStatistic,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useGetCourierStatistic;
