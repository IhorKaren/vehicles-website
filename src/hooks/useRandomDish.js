import { getRandomDish } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useRandomDish = () => {
  const result = useQuery({
    queryKey: ["randomDish"],
    queryFn: getRandomDish,
  });

  return result;
};
