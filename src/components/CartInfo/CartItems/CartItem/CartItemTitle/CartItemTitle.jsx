import { useState } from "react";
import { useDispatch } from "react-redux";

import { Backdrop, Button, Typography } from "@mui/material";

import { useCartTypeContext } from "@/contexts/CartTypeContext";
import { hideUserCart, showUserCart } from "@/redux/cartStatus/slice";
import { AppModal } from "@/shared/AppModal/AppModal";
import { CartItemTitlePropTypes } from "./CartItemTitle.props";
import { CartItemTitleStyled } from "./CartItemTitle.styled";

const CartItemTitle = ({ title, dishId, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { isDefault } = useCartTypeContext();

  const openModalHandler = () => {
    dispatch(hideUserCart());
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    dispatch(showUserCart());
  };

  return (
    <>
      <CartItemTitleStyled noWrap={true} {...props} onClick={openModalHandler}>
        {title}
      </CartItemTitleStyled>
      {isModalOpen && (
        <AppModal
          isOpen={isModalOpen}
          onClose={closeModalHandler}
          contentProps={{
            style: {
              backgroundColor: "transparent",
              border: "none",
              minWidth: "480px",
              minHeight: "540px",
              boxShadow: "none",
            },
          }}
          BackdropComponent={(props) => (
            <Backdrop {...props} style={{ opacity: isDefault ? 0 : 1 }} />
          )}
        >
          <Typography variant="h3">Order</Typography>
          <Button onClose={closeModalHandler}>Close</Button>
        </AppModal>
      )}
    </>
  );
};

CartItemTitle.propTypes = CartItemTitlePropTypes;

export default CartItemTitle;
