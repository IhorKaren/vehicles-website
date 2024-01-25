import { useSelector } from "react-redux";

import { getUserOrders } from "@/api";
import { queryKey } from "@/constants";
import { selectUser } from "@/redux/auth/selectors";
import { useQuery } from "@tanstack/react-query";

const useUserOrders = ({ page, pageSize }) => {
  const userId = useSelector(selectUser)?.id;
  const key = [queryKey.ORDERS, userId, { page, pageSize }];

  return useQuery({
    queryKey: key,
    queryFn: () => getUserOrders(userId, page + 1, pageSize),
    enabled: !!userId,
    select: (data) => data.data,
  });
};

export default useUserOrders;
