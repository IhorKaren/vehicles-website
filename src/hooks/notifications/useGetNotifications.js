import { getNotifications } from "@/api/notifications/getReadNotifications";
import { useQuery } from "@tanstack/react-query";

export const useGetNotifications = ({ read, role } = {}) => {
  return useQuery({
    queryKey: ["getNotifications", { read, role }],
    queryFn: () => getNotifications({ read, role }),
    staleTime: 1000 * 60 * 3,
    cacheTime: 1000 * 60 * 30,
    refetchOnWindowFocus: true,
  });
};
