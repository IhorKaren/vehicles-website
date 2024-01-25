import { styled, Typography } from "@mui/material";

export const CartItemDescStyled = styled(Typography)({
  height: "100%",
  maxWidth: "280px",
  maxHeight: "54px",
  margin: "1rem 0 auto",
  boxSizing: "border-box",

  fontStyle: "italic",
  fontSize: "0.85rem",
  lineHeight: 1.3,
  // textAlign: 'justify',

  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
});

export const CartItemTagBlockStyled = styled("div", {
  shouldForwardProp: (prop) => prop !== "isDefault",
})(({ isDefault }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,

  display: "flex",
  flexDirection: "row",
  gap: `${isDefault ? "0.5rem" : "0.3rem"}`,
  marginTop: `${isDefault ? "0" : "auto"}`,
}));

export const CartItemTagStyled = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 8px",

  width: "fit-content",
  height: "26px",

  fontSize: "0.8rem",
  backgroundColor: `${theme.palette.grey[200]}`,
  borderRadius: "5px",
}));
