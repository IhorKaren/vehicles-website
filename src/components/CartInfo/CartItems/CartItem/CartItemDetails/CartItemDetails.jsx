import { Typography } from "@mui/material";

import { AppImage } from "@/shared";
import {
  CartItemDescriptionPropTypes,
  CartItemImagePropTypes,
  CartItemTagsPropTypes,
} from "./CartItemDetails.props";
import {
  CartItemDescStyled,
  CartItemTagBlockStyled,
  CartItemTagStyled,
} from "./CartItemDetails.styled";

// DISH IMAGE
export const CartItemImage = ({ isDefault, dish }) => {
  const { image, name } = dish;
  return (
    <AppImage
      src={image}
      alt={name}
      sx={{ boxShadow: 1 }}
      {...(isDefault ? { width: 150, height: 150 } : {})}
    />
  );
};

CartItemImage.propTypes = CartItemImagePropTypes;

// DISH DESCRIPTION
export const CartItemDescription = ({ isDefault, description }) =>
  isDefault ? <CartItemDescStyled>{description}</CartItemDescStyled> : null;

CartItemDescription.propTypes = CartItemDescriptionPropTypes;

// SPICE LEVEL, CATEGORY, CUISINE
export const CartItemTags = ({ isDefault, dish, theme }) => {
  const { spiceLevel, cuisine, category } = dish;
  return (
    <CartItemTagBlockStyled isDefault={isDefault}>
      <Typography sx={{ fontWeight: "bold" }}>
        Spice level: {spiceLevel}
      </Typography>
      {isDefault &&
        [cuisine, category].map((tag) => (
          <CartItemTagStyled theme={theme} key={tag}>
            {tag}
          </CartItemTagStyled>
        ))}
    </CartItemTagBlockStyled>
  );
};

CartItemTags.propTypes = CartItemTagsPropTypes;
