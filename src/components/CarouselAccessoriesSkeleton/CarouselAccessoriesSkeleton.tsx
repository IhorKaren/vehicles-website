import { AppCarousel } from "../../shared/AppCarousel/AppCarousel";
import { VehCardSkeleton } from "../VehCardSkeleton/VehCardSkeleton";

export const CarouselAccessoriesSkeleton = () => {
  return (
    <AppCarousel>
      {Array.from({ length: 5 }).map((item, index) => (
        <VehCardSkeleton key={index} isCarousel={true} />
      ))}
    </AppCarousel>
  );
};
