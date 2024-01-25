import PropTypes from "prop-types";

export const customLinkProps = {
  to: PropTypes.string.isRequired,
  props: PropTypes.object,
  children: PropTypes.node.isRequired,
};
