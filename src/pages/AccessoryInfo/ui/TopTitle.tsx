import {
  Box,
  Dialog,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useEffect, useState } from "react";
import { customColors } from "../../../constants/customColors";
import StarIcon from "@mui/icons-material/Star";
import AppButton from "../../../shared/Buttons/AppButton";
import { Accessory } from "../../../App.types";
import mockUser from "../../../components/CarouselAccessories/AccessoriesCard/mockdata/data";
import { IoCartOutline } from "react-icons/io5";
import { StyledItemBadge } from "../../../components/CarouselAccessories/CardBadge/CardBadge";
import ContactPageIcon from "@mui/icons-material/ContactPage";

import {
  Cart,
  CartItem,
} from "../../../components/CarouselVehicles/VehicleCard/mockdata/getFavorite";
import ChatInterface from "./ChatInterface";

type TopTitleProps = {
  id: number | string | undefined;
  accessory: Accessory;
};
export const TopTitle: React.FC<TopTitleProps> = ({ id, accessory }) => {
  const theme = useTheme();
  const isSmOrDown = useMediaQuery(theme.breakpoints.down("md"));
  const userId: string = mockUser[0]?.id;
  const [isChatOpen, setChatOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const favoriteAccessoriesIds = mockUser[0]?.favoriteAccessories;
  useEffect(() => {
    const foundAccessory = favoriteAccessoriesIds?.includes(Number(id));
    if (foundAccessory) {
      setFavorite(true);
    }
  }, [favoriteAccessoriesIds]);

  const handleAddFavorites = () => {
    if (!favorite) {
      setFavorite(!favorite);
    } else {
      setFavorite(!favorite);
    }
  };

  const cartUser = mockUser[0]?.cart;

  const [cart, setCart] = useState<Cart>(cartUser);
  const cartItem = cart?.items.find((item) => item.accessoryId === Number(id));

  const isInCart = cartItem !== undefined;
  const cartItemCount = cartItem ? cartItem.count : 0;

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

  const handleAddToCart = () => {
    if (isInCart) {
      updateCartItem(Number(id), cartItemCount + 1);
    } else {
      addCartItem(Number(id), 1);
    }
  };

  const cartStyle = { backgroundColor: "success.light" };
  const buttonStyle = !isInCart ? {} : { ...cartStyle };
  const labelContent = isInCart ? "In Cart" : "Add";
  const endIconContent = isInCart ? (
    <StyledItemBadge count={cartItem?.count} />
  ) : (
    <IoCartOutline style={{ fontSize: "24px" }} />
  );

  const handleOpenChat = async () => {
    try {
      // await connectWithSeller(sellerId);
      setChatOpen(true);
    } catch (error) {
      console.error("Failed to connect with the seller:", error);
    }
  };
  const handleCloseChat = () => {
    setChatOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "1.6rem",
            fontWeight: "700",
            lineHeight: "1.2",
            mb: "0.1rem",
          }}
        >
          {`${accessory?.name} ${accessory?.brand}`}
        </Typography>
        {isSmOrDown && (
          <>
            <IconButton
              onClick={handleAddFavorites}
              sx={{
                color: favorite ? customColors.primaryColor : "",
                ml: "auto",
              }}
            >
              <StarIcon />
            </IconButton>

            <IconButton onClick={handleAddToCart}>{endIconContent}</IconButton>
          </>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "baseline",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">{`${accessory?.description}`}</Typography>
        </Box>

        <AppButton
          sx={{
            mt: { xs: 2, sm: 0 },
            width: { xs: "100%", sm: "auto" },
            marginLeft: "auto",
            backgroundColor: "#f1f3f4",
            color: "#262626",
            "&:hover": {
              backgroundColor: { xs: "transparent" },
            },
          }}
          onClick={() => handleOpenChat()}
          label="Contact"
          endIcon={<ContactPageIcon />}
        />
        <Dialog
          open={isChatOpen}
          onClose={handleCloseChat}
          fullWidth
          maxWidth="sm"
        >
          <ChatInterface chatId={1234}></ChatInterface>
        </Dialog>
        {userId
          ? !isSmOrDown && (
              <AppButton
                sx={{
                  ml: 1,
                  backgroundColor: "#f1f3f4",
                  color: "#262626",
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: { xs: "transparent" },
                  },
                }}
                onClick={() => handleAddFavorites()}
                label="Follow"
                endIcon={
                  <StarIcon
                    style={{
                      color: favorite ? customColors.primaryColor : "",
                    }}
                  />
                }
              />
            )
          : ""}
        {!isSmOrDown && (
          <AppButton
            sx={buttonStyle}
            variant="contained"
            label={labelContent}
            onClick={handleAddToCart}
            disabled={false}
            endIcon={endIconContent}
          />
        )}
      </Box>
    </>
  );
};
