import { useDispatch } from "react-redux";

import { Avatar } from "@mui/material";

import { route } from "@/constants";
import { useCartTypeContext } from "@/contexts/CartTypeContext";
import { closeUserCart } from "@/redux/cartStatus/slice";
import { useTheme } from "@emotion/react";
import { CartChefInfoPropTypes } from "./CartChefInfo.props";
import { CartChefInfoLink, CartChefInfoStyled } from "./CartChefInfo.styled";

const CartChefInfo = ({ data, ...props }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isDefault } = useCartTypeContext();

  const handleChefClick = () => {
    if (isDefault) dispatch(closeUserCart());
  };

  return (
    <CartChefInfoStyled {...props} isDefault={isDefault} theme={theme}>
      <Avatar src={data.avatar} sx={{ boxShadow: 1 }} />
      <CartChefInfoLink
        to={`${route.CHEFS}/${data.id}`}
        theme={theme}
        onClick={handleChefClick}
      >
        {data.name}
      </CartChefInfoLink>
    </CartChefInfoStyled>
  );
};

CartChefInfo.propTypes = CartChefInfoPropTypes;

export default CartChefInfo;
