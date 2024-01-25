import { toast } from "react-toastify";

import { getDishById } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchDish = (id) => {
  const fetchData = async () => {
    if (!id) {
      return {
        data: null,
      };
    }

    try {
      const data = await getDishById(id);
      return data;
    } catch (error) {
      toast.error("Error fetching data");
      throw error;
    }
  };

  return useQuery({
    queryKey: ["dish", id],
    queryFn: fetchData,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  });
};
