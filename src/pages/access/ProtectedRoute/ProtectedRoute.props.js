import PropTypes from "prop-types";

export const ProtectedRoutePropTypes = {
  role: PropTypes.string.isRequired,
  authRedirectLink: PropTypes.string.isRequired,
  accessRedirectLink: PropTypes.string.isRequired,
};
