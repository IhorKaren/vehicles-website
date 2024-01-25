import { useSelector } from "react-redux";

import { addFavorite } from "@/api/favorites/addFavorite";
import { selectUser } from "@/redux/auth/selectors";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddFavorite = (type, favoriteId) => {
  const userId = useSelector(selectUser)?.id;
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: () => addFavorite(userId, type, favoriteId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [userId, "favorite", type] });
    },
  });

  return result;
};
