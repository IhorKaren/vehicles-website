import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartInfo from "@/components/CartInfo";
import { route } from "@/constants";
import {
  calcTotalAmountOfCartItems,
  calcTotalQtyOfCartItems,
  convertToMoney,
} from "@/helpers";
import { closeUserCart } from "@/redux/cartStatus/slice";
import { AppButton } from "@/shared";
import { useTheme } from "@emotion/react";
import {
  checkoutStyles,
  UserCartFooterStyled,
  UserCartQuantityStyled,
  UserCartTotalStyled,
  UserCartWarningStyled,
} from "../UserModalCart.styled";
import { CartSummaryPropTypes } from "./CartSummary.props";

const CartSummary = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckoutClick = () => {
    dispatch(closeUserCart());
    navigate(route.CREATE_ORDER);
  };

  const theme = useTheme();
  const { items } = data;

  const summaryInfo = useMemo(() => {
    const totalPrice = calcTotalAmountOfCartItems(items);
    const totalQty = calcTotalQtyOfCartItems(items);
    const hasUnavailableItem = items.some(
      ({ dish: { isAvailable } }) => !isAvailable,
    );
    const units = totalQty === 1 ? "pc." : "pcs.";

    return {
      totalPrice,
      totalQty,
      units,
      hasUnavailableItem,
    };
  }, [items]);

  const { totalQty, units, hasUnavailableItem, totalPrice } = summaryInfo;

  return (
    <>
      <CartInfo data={data} type="default" style={{ width: "600px" }} />

      {hasUnavailableItem ? (
        // ALERT IF DISH ISN'T AVAILABLE
        <UserCartWarningStyled severity="warning">
          Some dishes are currently unavailable! Please delete them.
        </UserCartWarningStyled>
      ) : (
        // CART FOOTER (QTY, AMOUNT, BUTTON)
        <UserCartFooterStyled theme={theme}>
          <UserCartQuantityStyled>
            Item(s): {totalQty} {units}
          </UserCartQuantityStyled>
          <UserCartTotalStyled>
            Total: {convertToMoney(totalPrice)}
          </UserCartTotalStyled>
          <AppButton
            style={{ ...checkoutStyles }}
            label={"Checkout"}
            onClick={handleCheckoutClick}
          />
        </UserCartFooterStyled>
      )}
    </>
  );
};

CartSummary.propTypes = CartSummaryPropTypes;

export default CartSummary;
