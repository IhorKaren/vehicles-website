import { markNotificationAsRead } from "@/api/notifications/markNotificationAsRead";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMarkNotificationAsRead = () => {
  const queryClient = useQueryClient();

  const { mutate: markAsRead } = useMutation({
    mutationFn: markNotificationAsRead,
    onSuccess: (data) => {
      if (data.message === "Notification updated") {
        queryClient.invalidateQueries([
          "unreadNotifications",
          "getNotifications",
        ]);
      }
    },
  });

  return markAsRead;
};
