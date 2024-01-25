import { Box } from "@mui/material";

import PropTypes from "prop-types";

export const AppImagePropTypes = {
  ...Box.propTypes,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
