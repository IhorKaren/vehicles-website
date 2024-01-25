import { Box } from "@mui/material";

import { CartTypeProvider } from "@/contexts/CartTypeContext";
import CartChefInfo from "./CartChefInfo";
import { CartInfoPropTypes } from "./CartInfo.props";
import CartItems from "./CartItems";

const CartInfo = ({ data, type, ...props }) => {
  return (
    <CartTypeProvider type={type}>
      <Box {...props}>
        <CartChefInfo data={data.chef} />

        <CartItems data={data.items} />
      </Box>
    </CartTypeProvider>
  );
};

CartInfo.propTypes = CartInfoPropTypes;

CartInfo.defaultProps = {
  type: "in-order",
};

export default CartInfo;
