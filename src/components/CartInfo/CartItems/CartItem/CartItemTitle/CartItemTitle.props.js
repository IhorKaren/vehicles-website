import { Typography } from "@mui/material";

import PropTypes from "prop-types";

export const CartItemTitlePropTypes = {
  ...Typography.propTypes,
  title: PropTypes.string.isRequired,
  dishId: PropTypes.string.isRequired,
};
