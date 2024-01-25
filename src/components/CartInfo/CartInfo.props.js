import { Box } from "@mui/material";

import PropTypes from "prop-types";

import { CartChefInfoPropTypes } from "./CartChefInfo/CartChefInfo.props";
import { CartItemsPropTypes } from "./CartItems/CartItems.props";

export const CartInfoPropTypes = {
  ...Box.propTypes,
  data: PropTypes.shape({
    chef: CartChefInfoPropTypes.data,
    items: CartItemsPropTypes.data,
  }).isRequired,
  type: PropTypes.oneOf(["default", "in-order"]),
};
