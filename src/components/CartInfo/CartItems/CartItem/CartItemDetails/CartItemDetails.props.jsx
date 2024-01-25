import PropTypes from "prop-types";

export const CartItemImagePropTypes = {
  isDefault: PropTypes.bool.isRequired,
  dish: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export const CartItemDescriptionPropTypes = {
  isDefault: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export const CartItemTagsPropTypes = {
  isDefault: PropTypes.bool.isRequired,
  dish: PropTypes.shape({
    cuisine: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    spiceLevel: PropTypes.number.isRequired,
  }),
  theme: PropTypes.object.isRequired,
};
