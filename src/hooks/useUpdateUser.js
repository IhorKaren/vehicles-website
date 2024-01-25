import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "@/api/updateUser";
import { getCurrentUser } from "@/redux/auth/operations";
import { selectUser } from "@/redux/auth/selectors";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateUser = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUser)?.id;
  const queryClient = useQueryClient();
  const key = ["user", userId];

  const result = useMutation({
    mutationFn: (data) => updateUser(data, userId),
    onSuccess: (data) => {
      queryClient.setQueryData(key, data);
      dispatch(getCurrentUser());
    },
  });

  return result;
};
