import { AppCarousel } from "@/shared/AppCarousel/AppCarousel";
import { ChefCardSkeleton } from "../ChefCardSkeleton/ChefCardSkeleton";

export const CarouselChefsSkeleton = () => {
  return (
    <AppCarousel>
      {Array.from({ length: 5 }).map((item, index) => (
        <ChefCardSkeleton key={index} isCarousel={true} />
      ))}
    </AppCarousel>
  );
};
