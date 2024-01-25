import { useSelector } from "react-redux";

import { getFavorite } from "@/api/favorites/getFavorite";
import NoChef from "@/assets/images/ChefsPage/Not_found_chef.png";
import { ChefCardSkeleton } from "@/components/ChefCardSkeleton/ChefCardSkeleton";
import FavoriteChefsList from "@/components/FavoriteChefsList/FavoriteChefsList";
import PageMessage from "@/components/PageMessage/PageMessage";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { selectUser } from "@/redux/auth/selectors";
import { AppContainer } from "@/shared";
import { Main } from "@/shared/Main/Main";
import { useQuery } from "@tanstack/react-query";
import { SkeletonCardItem, SkeletonWrapper } from "./FavoritesChefs.styled";

const FavoriteChefs = () => {
  const { id: userId } = useSelector(selectUser);

  const { data, isLoading } = useQuery({
    queryKey: [userId, "favorite", "chefs"],
    queryFn: () => getFavorite(userId, "chefs"),
  });

  return (
    <Main>
      <AppContainer>
        <PageTitle>YOUR FAVORITE CHEFS</PageTitle>

        {isLoading ? (
          <SkeletonWrapper>
            {Array.from({ length: 3 }).map((_item, index) => (
              <SkeletonCardItem SkeletonCardItem key={index}>
                <ChefCardSkeleton />
              </SkeletonCardItem>
            ))}
          </SkeletonWrapper>
        ) : data?.favoriteChefs.length === 0 ? (
          <PageMessage
            image={NoChef}
            message="You don't have favorites chefs"
          />
        ) : (
          <FavoriteChefsList data={data.favoriteChefs} />
        )}
      </AppContainer>
    </Main>
  );
};

export default FavoriteChefs;
