import { AppCarousel } from "../../shared/AppCarousel/AppCarousel";
import { VehCardSkeleton } from "../VehCardSkeleton/VehCardSkeleton";
import { FC } from "react";

export const CarouselVehiclesSkeleton: FC = () => {
  return (
    <AppCarousel>
      {Array.from({ length: 5 }).map((_item, index) => (
        <VehCardSkeleton key={index} isCarousel={true} />
      ))}
    </AppCarousel>
  );
};
