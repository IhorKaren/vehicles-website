import { useSelector } from "react-redux";

import { deleteFavorite } from "@/api/favorites/deleteFavorite";
import { selectUser } from "@/redux/auth/selectors";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteFavorite = (type, favoriteId) => {
  const userId = useSelector(selectUser)?.id;
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: () => deleteFavorite(userId, type, favoriteId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [userId, "favorite", type] });
    },
  });

  return result;
};
