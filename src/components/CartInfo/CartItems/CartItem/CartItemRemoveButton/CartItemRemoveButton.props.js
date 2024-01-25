import { Box } from "@mui/material";

import PropTypes from "prop-types";

export const CartItemRemoveButtonPropTypes = {
  ...Box.propTypes,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
