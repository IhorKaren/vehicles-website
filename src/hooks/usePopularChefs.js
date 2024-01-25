import { getPopularChefs } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetPopularChefs = () => {
  const fetchPopularChefs = async () => {
    const data = await getPopularChefs();
    return data;
  };
  return useQuery({
    queryKey: ["popularChefs"],
    queryFn: fetchPopularChefs,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};
