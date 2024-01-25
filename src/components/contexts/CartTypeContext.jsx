import { createContext, useContext } from "react";

import PropTypes from "prop-types";
const CartTypeContext = createContext();

export const CartTypeProvider = ({ children, type }) => {
  const isDefault = type === "default";

  return (
    <CartTypeContext.Provider value={{ isDefault }}>
      {children}
    </CartTypeContext.Provider>
  );
};

CartTypeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export const useCartTypeContext = () => {
  const context = useContext(CartTypeContext);
  if (!context) {
    throw new Error(
      "useCartInfoContext must be used within a CartInfoProvider",
    );
  }
  return context;
};
