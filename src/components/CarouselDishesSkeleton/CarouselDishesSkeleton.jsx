import { AppCarousel } from "@/shared/AppCarousel/AppCarousel";
import { DishCardSkeleton } from "../DishCardSkeleton/DishCardSkeleton";

export const CarouselDishesSkeleton = () => {
  return (
    <AppCarousel>
      {Array.from({ length: 5 }).map((item, index) => (
        <DishCardSkeleton key={index} isCarousel={true} />
      ))}
    </AppCarousel>
  );
};
