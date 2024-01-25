import { Fragment } from "react";

import { Divider, Typography } from "@mui/material";

import { useCartTypeContext } from "@/contexts/CartTypeContext";
import { useTheme } from "@emotion/react";
import CartItem from "./CartItem";
import { CartItemsPropTypes } from "./CartItems.props";
import { CartItemsBoxStyled } from "./CartItems.styled";

const CartItems = ({ data, ...props }) => {
  const { isDefault } = useCartTypeContext();
  const theme = useTheme();

  return (
    <CartItemsBoxStyled
      component="ul"
      {...props}
      isDefault={isDefault}
      theme={theme}
    >
      {data?.length === 0 ? (
        <Typography>{"You didn't choose any dishes"}</Typography>
      ) : (
        data.map((item, index, arr) => (
          <Fragment key={item.dish.id}>
            <CartItem component="li" data={item} />
            {index < arr.length - 1 && <Divider />}
          </Fragment>
        ))
      )}
    </CartItemsBoxStyled>
  );
};

CartItems.propTypes = CartItemsPropTypes;

export default CartItems;
