import { Vehicle } from "../../../App.types";
import { useEffect, useState } from "react";
import mockUser from "./mockdata/data";
import { User } from "./mockdata/getFavorite";
import StarIcon from "@mui/icons-material/Star";

import {
  FavoriteButton,
  MainInfoWrapper,
  PriceWrapper,
  VehicleAddress,
  VehicleCardWrapper,
  VehicleDescription,
  VehicleDetail,
  VehicleImage,
  VehicleImageWrapper,
  VehicleName,
  VehiclePrice,
} from "./VehicleCard.styled";
import { IconButton, Stack } from "@mui/material";
import { customColors } from "../../../constants/customColors";
import { convertToMoney } from "../../../helpers/convertToMoney";
import { Link } from "react-router-dom";
import { route } from "../../../constants/route";

type VehicleCardProps = {
  vehicleInfo: Vehicle;
  favoriteVehiclesIds: number[];
};
export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicleInfo,
  favoriteVehiclesIds,
}) => {
  const {
    price,
    make,
    model,
    year,
    type,
    fuelConsumption,
    engineSize,
    img,
    description,
    address,
    id,
  } = vehicleInfo;
  // const router = useLocation();

  const [favorite, setFavorite] = useState(false);
  // const selectUser = useSelector(user);
  // const userId = useSelector(selectUser)?.id;

  const selectUser: User = mockUser[0];
  const userId: string = mockUser[0]?.id;
  const vehicleId: number = vehicleInfo.id;

  useEffect(() => {
    const foundVehicle = favoriteVehiclesIds?.includes(vehicleId);
    if (foundVehicle) {
      setFavorite(true);
    }
  }, [favoriteVehiclesIds]);

  const addFavorite = () => {
    selectUser.favoriteVehicles.push(vehicleId);
  };

  const deleteFavorite = (): void => {
    selectUser.favoriteVehicles = selectUser.favoriteVehicles.filter(
      (id: number) => id !== vehicleId,
    );
  };

  const handleAddFavorites = () => {
    if (!favorite) {
      addFavorite();
      setFavorite(!favorite);
    } else {
      deleteFavorite();
      setFavorite(!favorite);
    }
  };

  const transformText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.slice(0, maxLength - 3) + "..."
      : text;
  };

  return (
    <VehicleCardWrapper>
      <VehicleImageWrapper>
        <Link to={`${route.VEHICLES}/${id}`}>
          <VehicleImage src={img[0]} alt={make} width="300" height="300" />
        </Link>
        <FavoriteButton>
          {userId ? (
            <IconButton
              sx={{ padding: "2px" }}
              onClick={() => handleAddFavorites()}
            >
              <StarIcon
                style={{ color: favorite ? customColors.primaryColor : "" }}
              />
            </IconButton>
          ) : (
            ""
          )}
        </FavoriteButton>

        <PriceWrapper sx={{ maxHeight: 20 }}>
          <VehiclePrice>Sold for {convertToMoney(price)}</VehiclePrice>
        </PriceWrapper>
      </VehicleImageWrapper>

      <Stack
        direction="column"
        sx={{
          maxHeight: 90,
          height: 75,
        }}
      >
        <MainInfoWrapper>
          <VehicleName>
            {transformText(`${year} ${make} ${model}`, 24)}
          </VehicleName>
        </MainInfoWrapper>
        <VehicleDetail>
          {transformText(`${fuelConsumption} ${engineSize} ${type}`, 40)}
        </VehicleDetail>
        <VehicleDescription>
          {transformText(description, 65)}
        </VehicleDescription>

        <VehicleAddress>{transformText(address, 30)}</VehicleAddress>
      </Stack>
    </VehicleCardWrapper>
  );
};
