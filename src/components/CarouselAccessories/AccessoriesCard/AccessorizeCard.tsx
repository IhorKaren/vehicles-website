import { Accessory } from "../../../App.types";
import { useEffect, useState } from "react";
import mockUser from "./mockdata/data";
import {
  ButtonsWrapper,
  FavoriteButton,
  MainInfoWrapper,
  AccessoryCardWrapper,
  AccessoryDescription,
  AccessoryImage,
  AccessoryImageWrapper,
  AccessoryName,
  AccessoryPrice,
  PriceWrapper,
} from "./AccessoriesCard.styled";
import { IconButton, Stack } from "@mui/material";
import { customColors } from "../../../constants/customColors";
import { PiHeart } from "react-icons/pi";
import { convertToMoney } from "../../../helpers/convertToMoney";
import AppButton from "../../../shared/Buttons/AppButton";
import {
  Cart,
  CartItem,
  User,
} from "../../../components/CarouselVehicles/VehicleCard/mockdata/getFavorite";
import { StyledItemBadge } from "../CardBadge/CardBadge";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { route } from "../../../constants/route";

type AccessoryCardProps = {
  accessorizeInfo: Accessory;
  favoriteAccessoriesIds: number[];
};
export const AccessorizeCard: React.FC<AccessoryCardProps> = ({
  accessorizeInfo,
  favoriteAccessoriesIds,
}) => {
  // const selectUser = useSelector(user);
  // const userId = useSelector(selectUser)?.id;
  const [favorite, setFavorite] = useState(false);

  const selectUser: User = mockUser[0];
  const userId: string = mockUser[0]?.id;
  const accessoryId: number = accessorizeInfo.id;

  useEffect(() => {
    const favoriteAccessoryFind = favoriteAccessoriesIds?.includes(accessoryId);
    if (favoriteAccessoryFind) {
      setFavorite(true);
    }
  }, [favoriteAccessoriesIds]);

  const addFavorite = () => {
    selectUser.favoriteAccessories.push(accessoryId);
  };

  const deleteFavorite = (): void => {
    selectUser.favoriteAccessories = selectUser.favoriteAccessories.filter(
      (id: number) => id !== accessoryId,
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

  const cartData = selectUser.cart;
  const [cart, setCart] = useState<Cart>(cartData);

  const updateCartItem = (itemId: number, count: number) => {
    const updatedItems = cart?.items.map((item) => {
      if (item.accessoryId === itemId) {
        return { ...item, count: count };
      }
      return item;
    });
    setCart({ ...cart, items: updatedItems });
  };

  const addCartItem = (itemId: number, count: number) => {
    const newItem: CartItem = { accessoryId: itemId, count: count };
    const updatedItems = [...cart?.items, newItem];
    setCart({ ...cart, items: updatedItems });
  };

  const cartItem = cart.items.find(
    (item) => item.accessoryId === accessorizeInfo.id,
  );
  const isInCart = cartItem !== undefined;
  const cartItemCount = cartItem ? cartItem.count : 0;

  const handleAddToCart = () => {
    const itemId = accessorizeInfo.id;
    if (isInCart) {
      updateCartItem(itemId, cartItemCount + 1);
    } else {
      addCartItem(itemId, 1);
    }
  };

  const baseStyle = {
    fontSize: "12px",
    height: "35px",
    whiteSpace: "nowrap",
    width: "100%",
  };
  const transformText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.slice(0, maxLength - 3) + "..."
      : text;
  };
  const cartStyle = { backgroundColor: "success.light" };

  const buttonStyle = !isInCart
    ? { ...baseStyle }
    : { ...baseStyle, ...cartStyle };

  const labelContent = isInCart ? "In Cart" : "Add to Cart";

  const endIconContent = isInCart ? (
    <StyledItemBadge count={cartItem?.count} />
  ) : (
    <IoCartOutline style={{ fontSize: "24px" }} />
  );

  return (
    <AccessoryCardWrapper>
      <AccessoryImageWrapper>

      <Link to={`${route.ACCESSORIES}/${accessorizeInfo.id}`}>
      <AccessoryImage
          src={accessorizeInfo.img[0]}
          alt={accessorizeInfo.name}
          width="250"
          height="250"
        />
        </Link>

        <FavoriteButton>
          {userId ? (
            <IconButton onClick={() => handleAddFavorites()}>
              <PiHeart
                style={{ color: favorite ? customColors.primaryColor : "" }}
              />
            </IconButton>
          ) : (
            ""
          )}
        </FavoriteButton>
      </AccessoryImageWrapper>

      <Stack
        sx={{
          maxHeight: 90,
          height: 75,
        }}
      >
        <MainInfoWrapper>
          <AccessoryName>
            {transformText(accessorizeInfo.name, 46)}
          </AccessoryName>
        </MainInfoWrapper>

        <AccessoryDescription>
          {transformText(accessorizeInfo.description, 80)}
        </AccessoryDescription>

        <PriceWrapper sx={{ maxHeight: 20 }}>
          <AccessoryPrice>
            {convertToMoney(accessorizeInfo.price)}
          </AccessoryPrice>
        </PriceWrapper>
      </Stack>

      <ButtonsWrapper>
        <AppButton
          sx={buttonStyle}
          variant="contained"
          label={labelContent}
          onClick={handleAddToCart}
          disabled={false}
          endIcon={endIconContent}
        />
      </ButtonsWrapper>

      {/* <AccessoryOrderCardModal
        AccessoryId={accessorizeInfo.id}
        isModalOpen={isModalOpen}
        closeModalHandler={closeModalHandler}
        handleAddToCart={handleAddToCart}
      /> */}
    </AccessoryCardWrapper>
  );
};
