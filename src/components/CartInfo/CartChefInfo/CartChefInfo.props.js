import { Box } from "@mui/material";

import PropTypes from "prop-types";

export const CartChefInfoPropTypes = {
  ...Box.propTypes,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
