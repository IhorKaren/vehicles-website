import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

import { PageMessageImage } from "./PageMessage.styled";

export const PageMessagePropTypes = {
  ...Box.propTypes,
  image: PropTypes.string,
  imageProps: PropTypes.shape({ ...PageMessageImage.propTypes }),
  messageProps: PropTypes.shape({ ...Typography.propTypes }),
  variant: PropTypes.oneOf(["error", "no-data", "payment"]),
  message: PropTypes.string,
};
