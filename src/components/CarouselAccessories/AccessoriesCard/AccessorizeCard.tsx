import { Accessory } from "../../../App.types";
import { useEffect, useState } from "react";
import mockUser from "./mockdata/data";
import { ButtonsWrapper, FavoriteButton, MainInfoWrapper, AccessoryCardWrapper, AccessoryDescription, AccessoryImage, AccessoryImageWrapper, AccessoryName, AccessoryPrice, PriceWrapper } from "./AccessoriesCard.styled";
import { IconButton, Stack } from "@mui/material";
import { customColors } from "../../../constants/customColors";
import { PiHeart } from 'react-icons/pi';
import { convertToMoney } from "../../../helpers/convertToMoney";
import AppButton from "../../../shared/Buttons/AppButton";
import { User } from "../../../components/CarouselVehicles/VehicleCard/mockdata/getFavorite";
import { StyledItemBadge } from "../CardBadge/CardBadge";

type AccessoryCardProps = {
  accessorizeInfo: Accessory;
  favoriteAccessoriesIds: number[];
}
export const AccessorizeCard: React.FC<AccessoryCardProps> = ({ accessorizeInfo, favoriteAccessoriesIds }) => {
  const [favorite, setFavorite] = useState(false);
  // const selectUser = useSelector(user);
  // const userId = useSelector(selectUser)?.id;
  
  const selectUser: User = mockUser[0];
  const userId:string  = mockUser[0]?.id
  const accessoryId:number = accessorizeInfo.id;

  useEffect(() => {
  const foundAccessory = favoriteAccessoriesIds?.includes(accessoryId);
  if (foundAccessory) {
    setFavorite(true);
  }
  console.log(foundAccessory);
  
}, [favoriteAccessoriesIds]);

const addFavorite = () => {
  selectUser.favoriteAccessories.push(accessoryId);
};

const deleteFavorite = (): void => {
  selectUser.favoriteAccessories = selectUser.favoriteAccessories.filter((id: number) => id !== accessoryId);
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

const baseStyle = { fontSize: '12px', height: '36px', whiteSpace: 'nowrap' };
const transformText = (text: string, maxLength: number) => {
  return text.length > maxLength
    ? text.slice(0, maxLength - 3) + '...'
    : text;
};


    return (
      <AccessoryCardWrapper
    >
      <AccessoryImageWrapper>
        <AccessoryImage
          src={accessorizeInfo.img}
          alt={accessorizeInfo.name}
          width="250"
          height="250"
        />

        <FavoriteButton >
          {userId ? (
            <IconButton onClick={() => handleAddFavorites()}>
              <PiHeart
                style={{ color: favorite ? customColors.primaryColor : '' }}
              />
            </IconButton>
          ) : (
            ''
          )}
        </FavoriteButton>

      </AccessoryImageWrapper>


      <Stack
        sx={{
          maxHeight:  90,
          height:  75
        }}
      >
        <MainInfoWrapper>
          <AccessoryName >
            {transformText(accessorizeInfo.name, 46)}
          </AccessoryName>
        </MainInfoWrapper>
        
          <AccessoryDescription >
            {transformText(accessorizeInfo.description, 80)}
          </AccessoryDescription>

          <PriceWrapper sx={{ maxHeight: 20 }}>
          <AccessoryPrice >
            {convertToMoney(accessorizeInfo.price)}
          </AccessoryPrice>
                  </PriceWrapper>


      </Stack>

      <ButtonsWrapper >
        <AppButton
            sx={baseStyle}
            variant="outlined"
            label="Learn More" 
            // onClick={openModalHandler}
        />
        <AppButton
          sx={baseStyle}
          variant="contained"
          label={'Add to Cart'}
          disabled={false}
        />


      </ButtonsWrapper>
      <StyledItemBadge content={1} />

      {/* <AccessoryOrderCardModal
        AccessoryId={accessorizeInfo.id}
        isModalOpen={isModalOpen}
        closeModalHandler={closeModalHandler}
        handleAddToCart={handleAddToCart}
      /> */}
    </AccessoryCardWrapper>
  );
};

