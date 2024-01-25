import PropTypes from "prop-types";

export const AppModalProps = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  contentProps: PropTypes.object,
};
