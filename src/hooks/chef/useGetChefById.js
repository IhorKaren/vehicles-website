import { getChefById } from "@/api/chef/getChefById";
import { useQuery } from "@tanstack/react-query";

const useGetChefById = (chefId) => {
  const fetchChefById = async () => {
    const data = await getChefById(chefId);
    return data;
  };

  return useQuery({
    queryKey: ["chefs", chefId],
    queryFn: fetchChefById,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useGetChefById;
