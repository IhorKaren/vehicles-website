import { IconButton, styled } from "@mui/material";

export const CartItemRemoveButtonStyled = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: "10px",
  top: "10px",

  pointerEvents: "auto",

  "&:hover": {
    color: `${theme.palette.primary.main}`,
  },
}));

CartItemRemoveButtonStyled.defaultProps = {
  size: "small",
};
