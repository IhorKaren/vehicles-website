import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { deleteAllCartItems } from "@/api";
import { queryKey } from "@/constants";
import { selectUser } from "@/redux/auth/selectors";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteAllCartItems = () => {
  const userId = useSelector(selectUser)?.id;
  const queryClient = useQueryClient();
  const key = [queryKey.CART, userId];
  const backupKey = [...key, queryKey.BACKUP];

  const result = useMutation({
    mutationFn: () => deleteAllCartItems(userId),
    onSuccess: () => {
      queryClient.setQueryData(backupKey, null);
    },
    onMutate: () => {
      queryClient.setQueryData(key, null);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return result;
};
