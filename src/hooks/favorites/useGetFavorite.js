import { useSelector } from "react-redux";

import { getFavorite } from "@/api/favorites/getFavorite";
import { selectUser } from "@/redux/auth/selectors";
import { useQuery } from "@tanstack/react-query";

export const useGetFavorite = (type) => {
  const userId = useSelector(selectUser)?.id;
  const fetchFavorite = async () => {
    const data = await getFavorite(userId, type);
    return data;
  };
  return useQuery({
    queryKey: [userId, "favorite", type],
    queryFn: fetchFavorite,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};
