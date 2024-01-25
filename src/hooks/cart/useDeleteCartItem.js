import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { deleteCartItem } from "@/api";
import { queryKey } from "@/constants";
import { selectUser } from "@/redux/auth/selectors";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCartItem = () => {
  const userId = useSelector(selectUser)?.id;
  const queryClient = useQueryClient();
  const key = [queryKey.CART, userId];
  const backupKey = [...key, queryKey.BACKUP];

  const result = useMutation({
    mutationFn: (dishId) => deleteCartItem(userId, dishId),
    onSuccess: () => {
      queryClient.setQueryData(backupKey, null);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return result;
};
