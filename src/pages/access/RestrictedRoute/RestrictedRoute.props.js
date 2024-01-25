import PropTypes from "prop-types";

export const RestrictedRoutePropTypes = {
  role: PropTypes.string,
  redirectLink: PropTypes.string.isRequired,
};
