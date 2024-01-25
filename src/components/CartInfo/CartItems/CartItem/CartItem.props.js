import { Box } from "@mui/material";

import PropTypes from "prop-types";

export const CartItemPropTypes = {
  ...Box.propTypes,

  data: PropTypes.shape({
    dish: PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      cuisine: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      spiceLevel: PropTypes.number.isRequired,
      isAvailable: PropTypes.bool.isRequired,
    }).isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};
