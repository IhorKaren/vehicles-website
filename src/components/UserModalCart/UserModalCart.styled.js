import { Alert, Box, styled, Typography } from "@mui/material";

export const UserCartFooterStyled = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,

  display: "grid",
  gridTemplateColumns: "25% 42% 33%",
  placeItems: "center",

  width: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  paddingLeft: "1.6rem",

  backgroundColor: "#eee",
});

export const UserCartQuantityStyled = styled(Typography)({
  fontWeight: 600,
  fontSize: "1.1rem",
  fontFamily: "Inter",
});

export const UserCartTotalStyled = styled(Typography)({
  fontWeight: 600,
  fontSize: "1.3rem",
  fontFamily: "Inter",
});

export const UserCartWarningStyled = styled(Alert)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "56px",
  width: "100%",
  position: "absolute",
  bottom: 0,
  left: 0,
});

export const modalStyles = {
  display: "grid",
  placeItems: "center",
  padding: 0,
  maxHeight: "80vh",
  minHeight: "515px",
  overflow: "hidden",
  width: "600px",
};

export const checkoutStyles = {
  width: "100%",
  borderRadius: "0",
  height: "56px",
  fontSize: "1.2rem",
  border: "none",
};

export const cartLoaderStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
