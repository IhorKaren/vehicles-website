import { useCallback, useEffect, useMemo, useState } from "react";

import { Typography } from "@mui/material";

import debounce from "lodash.debounce";

import { useCartTypeContext } from "@/contexts/CartTypeContext";
import { convertToMoney } from "@/helpers";
import {
  useCartOptimisticUpdate,
  useDeleteCartItem,
  useUpdateCartItemById,
} from "@/hooks";
import { useTheme } from "@emotion/react";
import { CartItemPropTypes } from "./CartItem.props";
import {
  CartItemBodyStyled,
  CartItemContainer,
  CartItemStyled,
} from "./CartItem.styled";
import {
  CartItemDescription,
  CartItemImage,
  CartItemTags,
} from "./CartItemDetails/CartItemDetails";
import CartItemRemoveButton from "./CartItemRemoveButton";
import CartItemTitle from "./CartItemTitle";

const CartItem = ({ data, ...props }) => {
  const { dish, count } = data;
  const { name, price, description, isAvailable } = dish;
  const [itemCount, setItemCount] = useState(count);

  const { isDefault } = useCartTypeContext();
  const theme = useTheme();

  const { mutate: updateCart } = useUpdateCartItemById();
  const { mutate: deleteCart } = useDeleteCartItem();
  const optimisticUpdate = useCartOptimisticUpdate();

  const fetch = useMemo(
    () =>
      debounce(async (newCount) => {
        if (newCount === 0) {
          deleteCart(dish.id);
        } else {
          updateCart({ item: { dishId: dish.id, count: newCount } });
        }
      }, 400),
    [deleteCart, dish.id, updateCart],
  );

  const changeCount = useCallback(
    (value) => {
      setItemCount(value);
      optimisticUpdate(dish.id, value);
      fetch(value);
    },
    [dish.id, fetch, optimisticUpdate],
  );

  useEffect(() => {
    setItemCount(count);
  }, [count]);

  return (
    <CartItemStyled {...props} isDefault={isDefault}>
      {/* DELETE DISH */}
      <CartItemRemoveButton name={name} id={dish.id} />

      <CartItemContainer isAvailable={isAvailable} isDefault={isDefault}>
        {/* DISH IMAGE */}
        <CartItemImage isDefault={isDefault} dish={dish} />

        <CartItemBodyStyled>
          {/* NAME AND PRICE */}
          <CartItemTitle title={name} dishId={dish.id} />
          <Typography sx={{ fontStyle: "italic" }}>
            {convertToMoney(price)}
          </Typography>

          {/* DESCRIPTION */}
          <CartItemDescription
            isDefault={isDefault}
            description={description}
          />

          {/* SPICE LEVEL, CATEGORY, CUISINE */}
          <CartItemTags isDefault={isDefault} dish={dish} theme={theme} />
        </CartItemBodyStyled>
      </CartItemContainer>
    </CartItemStyled>
  );
};

CartItem.propTypes = CartItemPropTypes;

export default CartItem;
