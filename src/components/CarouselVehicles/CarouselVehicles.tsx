import { AppCarousel } from "../../shared/AppCarousel/AppCarousel";
import { Vehicle } from "../../App.types";
import { VehicleCard } from "./VehicleCard/VehicleCard";
import { useEffect, useState } from "react";
import mockUser from "./VehicleCard/mockdata/data";
import { getFavorite } from "./VehicleCard/mockdata/getFavorite";
type CarouselVehiclesProps = {
  popularVehiclesData: Vehicle[];
};
export const CarouselVehicles: React.FC<CarouselVehiclesProps> = ({
  popularVehiclesData,
}) => {
  // const userId = useSelector(selectUser)?.id;
  const userId: string = mockUser[0]?.id;
  const [favoriteVehiclesIds, setFavoriteVehiclesIds] = useState<number[]>([]);

  useEffect(() => {
    if (userId) {
      const fetchFavorite = () => {
        const data = getFavorite(userId, "vehicles");
        setFavoriteVehiclesIds(data);
      };
      fetchFavorite();
    }
  }, [userId]);

  return (
    <AppCarousel>
      {popularVehiclesData.map((el) => (
        <VehicleCard
          key={el.id}
          vehicleInfo={el}
          favoriteVehiclesIds={favoriteVehiclesIds}
        />
      ))}
    </AppCarousel>
  );
};
