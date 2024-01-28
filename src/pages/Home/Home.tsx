import { FC } from "react";
import { CarouselAccessoriesSkeleton } from "../../components/CarouselAccessoriesSkeleton/CarouselAccessoriesSkeleton";
import { CarouselVehiclesSkeleton } from "../../components/CarouselVehiclesSkeleton/CarouselVehiclesSkeleton";
import { Hero } from "../../components/Hero";
import Overview from "../../components/Overview";
import { route } from "../../constants/route";
import { HomeStyled } from "./Home.styled";

const HomePage: FC = () => {
  return (
    <HomeStyled>
      <Hero />
      <Overview
        title="Popular vehicles"
        redirectTo={route.VEHICLES}
        component={<CarouselVehiclesSkeleton />}
      />
      <Overview
        title="Popular accessories"
        redirectTo={route.ACCESSORIES}
        component={<CarouselAccessoriesSkeleton />}
      />
    </HomeStyled>
  );
};

export default HomePage;
