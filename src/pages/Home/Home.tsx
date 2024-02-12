import { FC } from "react";
import { CarouselVehicles } from "../../components/CarouselVehicles/CarouselVehicles";
import { CarouselAccessoriesSkeleton } from "../../components/CarouselAccessoriesSkeleton/CarouselAccessoriesSkeleton";
import { CarouselVehiclesSkeleton } from "../../components/CarouselVehiclesSkeleton/CarouselVehiclesSkeleton";
import { Hero } from "../../components/Hero";
import Overview from "../../components/Overview";
import { route } from "../../constants/route";
import { HomeStyled } from "./Home.styled";
import { accessoriesData } from "../Accessories/data";
import { CarouselAccessories } from "../../components/CarouselAccessories/CarouselAccessories";
import { carsData } from "../../components/CarouselVehicles/data";

const HomePage: FC = () => {
  const popularVehiclesData = carsData;
  const popularAccessoriesData = accessoriesData;

  const popularVehiclesIsLoading = false;
  const popularAccessoriesIsLoading = false;

  return (
    <HomeStyled>
      <Hero />
      <Overview
        title="Popular vehicles"
        redirectTo={route.VEHICLES}
        component={
          popularVehiclesIsLoading ? (
            <CarouselVehiclesSkeleton />
          ) : (
            <CarouselVehicles popularVehiclesData={popularVehiclesData} />
          )
        }
      />
      <Overview
        title="Popular accessories"
        redirectTo={route.ACCESSORIES}
        component={
          popularAccessoriesIsLoading ? (
            <CarouselAccessoriesSkeleton />
          ) : (
            <CarouselAccessories
              popularAccessoriesData={popularAccessoriesData}
            />
          )
        }
      />
    </HomeStyled>
  );
};

export default HomePage;
