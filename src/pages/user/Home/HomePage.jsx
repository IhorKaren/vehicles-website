// import { CarouselChefs } from "@/components/CarouselChefs/CarouselChefs";
import { CarouselChefsSkeleton } from "@/components/CarouselChefsSkeleton/CarouselDishesSkeleton";
// import { CarouselDishes } from "@/components/CarouselDishes/CarouselDishes";
import { CarouselDishesSkeleton } from "@/components/CarouselDishesSkeleton/CarouselDishesSkeleton";
import { Hero } from "@/components/Hero";
import HeroWrapper from "@/components/Hero/HeroWrapper";
import Overview from "@/components/Overview";
import { route } from "@/constants";
// import { useGetPopularChefs, usePopularDishes } from "@/hooks";
import { HomePageStyled } from "./Homepage.styled";

const HomePage = () => {
  // const {
  //   data: popularDishes = [],
  //   isLoading: popularDishesIsLoading,
  //   //error: popularDishesError,
  // } = usePopularDishes();

  // const {
  //   data: popularChefs = [],
  //   isLoading: popularChefsIsLoading,
  //   //error: popularChefsError,
  // } = useGetPopularChefs();

  return (
    <HomePageStyled>
      <Hero />
      <Overview
        title="Popular vehicles"
        redirectTo={route.DISHES}
        component={
          <CarouselDishesSkeleton />
          // popularDishesIsLoading ? (
          //   <CarouselDishesSkeleton />
          // ) : (
          //   <CarouselDishes data={popularDishes} />
          // )
        }
      />
      <Overview
        title="Popular accessories"
        redirectTo={route.CHEFS}
        component={
          <CarouselChefsSkeleton />

          // popularChefsIsLoading ? (
          //   <CarouselChefsSkeleton />
          // ) : (
          //   <CarouselChefs data={popularChefs} />
          // )
        }
      />
    </HomePageStyled>
  );
};

export default HomePage;
