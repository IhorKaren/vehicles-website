import PropTypes from "prop-types";

export const CartSummaryPropTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.number.isRequired,
        dish: PropTypes.shape({
          isAvailable: PropTypes.bool.isRequired,
        }).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
