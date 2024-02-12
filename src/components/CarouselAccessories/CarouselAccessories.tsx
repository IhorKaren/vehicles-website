import { AppCarousel } from "../../shared/AppCarousel/AppCarousel";
import { Accessory } from "../../App.types";
import { AccessorizeCard } from "./AccessoriesCard/AccessorizeCard";
import { useEffect, useState } from "react";
import mockUser from "./AccessoriesCard/mockdata/data";
import { getFavorite } from "../CarouselVehicles/VehicleCard/mockdata/getFavorite";
type CarouselAccessoriesProps = {
  popularAccessoriesData: Accessory[];
};
export const CarouselAccessories: React.FC<CarouselAccessoriesProps> = ({
  popularAccessoriesData,
}) => {
  // const userId = useSelector(selectUser)?.id;
  const userId: string = mockUser[0]?.id;
  const [favoriteAccessoriesIds, setFavoriteAccessoriesIds] = useState<
    number[]
  >([]);

  useEffect(() => {
    if (userId) {
      const fetchFavorite = () => {
        const data = getFavorite(userId, "accessories");
        setFavoriteAccessoriesIds(data);
      };
      fetchFavorite();
    }
  }, [userId]);

  return (
    <AppCarousel>
      {popularAccessoriesData.map((el) => (
        <AccessorizeCard
          key={el.id}
          accessorizeInfo={el}
          favoriteAccessoriesIds={favoriteAccessoriesIds}
        />
      ))}
    </AppCarousel>
  );
};
