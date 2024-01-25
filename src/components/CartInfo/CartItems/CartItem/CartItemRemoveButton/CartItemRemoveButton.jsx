import { useCallback } from "react";
import { MdClose } from "react-icons/md";

import { useCartOptimisticUpdate, useDeleteCartItem } from "@/hooks";
import { CartItemRemoveButtonPropTypes } from "./CartItemRemoveButton.props";
import { CartItemRemoveButtonStyled } from "./CartItemRemoveButton.styled";

const CartItemRemoveButton = ({ name, id, ...props }) => {
  const { mutate: deleteCart } = useDeleteCartItem();
  const optimisticUpdate = useCartOptimisticUpdate();

  const deleteCartHandler = useCallback(() => {
    deleteCart(id);
    optimisticUpdate(id, 0);
  }, [deleteCart, id, optimisticUpdate]);

  return (
    <CartItemRemoveButtonStyled
      aria-label={`delete ${name}`}
      onClick={deleteCartHandler}
      {...props}
    >
      <MdClose />
    </CartItemRemoveButtonStyled>
  );
};

CartItemRemoveButton.propTypes = CartItemRemoveButtonPropTypes;

export default CartItemRemoveButton;
