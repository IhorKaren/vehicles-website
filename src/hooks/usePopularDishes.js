import { getPopularDishes } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const usePopularDishes = () => {
  const result = useQuery({
    queryKey: ["popularDishes"],
    queryFn: getPopularDishes,
  });

  return result;
};
