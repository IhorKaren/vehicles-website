import { getUsersStatistic } from "@/api/admin/getUsersStatistic";
import { useQuery } from "@tanstack/react-query";

const useGetUsersStatistic = () => {
  const fetchUsersStatistic = async () => {
    try {
      const data = await getUsersStatistic();
      return data;
    } catch (error) {
      console.log("Error fetching users statistic");
    }
  };

  return useQuery({
    queryKey: ["admin", "userStatistic"],
    queryFn: fetchUsersStatistic,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useGetUsersStatistic;
