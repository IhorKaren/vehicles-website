import { Box } from "@mui/material";

import PropTypes from "prop-types";

export const OverviewPropTypes = {
  ...Box.propTypes,
  title: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
