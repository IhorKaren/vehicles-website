import { useSelector } from "react-redux";

import { getFavorite } from "@/api/favorites/getFavorite";
import NoFoundDish from "@/assets/Dishes_page/NoDishesFound.png";
import { DishCardSkeleton } from "@/components/DishCardSkeleton/DishCardSkeleton";
import DishesList from "@/components/DishesList/DishesList";
import PageMessage from "@/components/PageMessage/PageMessage";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { selectUser } from "@/redux/auth/selectors";
import { AppContainer } from "@/shared";
import { Main } from "@/shared/Main/Main";
import { useQuery } from "@tanstack/react-query";
import { SkeletonCardItem, SkeletonWrapper } from "./FavoriteDishes.styled";

const FavoriteDishes = () => {
  const { id: userId } = useSelector(selectUser);

  const { data, isLoading } = useQuery({
    queryKey: [userId, "favorite", "dishes"],
    queryFn: () => getFavorite(userId, "dishes"),
  });

  return (
    <Main>
      <AppContainer>
        <PageTitle>YOUR FAVORITE DISHES</PageTitle>

        {isLoading ? (
          <SkeletonWrapper>
            {Array.from({ length: 3 }).map((_item, index) => (
              <SkeletonCardItem SkeletonCardItem key={index}>
                <DishCardSkeleton />
              </SkeletonCardItem>
            ))}
          </SkeletonWrapper>
        ) : data?.favoriteDishes.length === 0 ? (
          <PageMessage
            image={NoFoundDish}
            message="You don't have favorites dishes"
          />
        ) : (
          <DishesList data={data.favoriteDishes} />
        )}
      </AppContainer>
    </Main>
  );
};

export default FavoriteDishes;

// /users/{userId}/favorite/{type}
