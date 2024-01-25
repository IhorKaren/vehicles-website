import { useSelector } from "react-redux";

import { getCartItems } from "@/api";
import { queryKey } from "@/constants";
import { selectUser } from "@/redux/auth/selectors";
import { useQuery } from "@tanstack/react-query";

export const useGetCartItems = () => {
  const userId = useSelector(selectUser)?.id;
  const key = [queryKey.CART, userId];

  const result = useQuery({
    queryKey: key,
    queryFn: async () => getCartItems(userId),
    enabled: !!userId,
  });

  return result;
};
