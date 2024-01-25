import { Box } from "@mui/material";

import PropTypes from "prop-types";

import { CartItemPropTypes } from "./CartItem/CartItem.props";

export const CartItemsPropTypes = {
  ...Box.propTypes,
  data: PropTypes.arrayOf(CartItemPropTypes.data).isRequired,
};
