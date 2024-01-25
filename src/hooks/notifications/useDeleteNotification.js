import { deleteNotification } from "@/api/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteNotification = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteNote } = useMutation({
    mutationFn: deleteNotification,
    onSuccess: () => {
      queryClient.invalidateQueries([
        "unreadNotifications",
        "getNotifications",
      ]);
    },
  });

  return deleteNote;
};
