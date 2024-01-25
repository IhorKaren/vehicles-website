import { Link } from "react-router-dom";

import { Box, styled } from "@mui/material";

export const CartItemStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDefault",
})(({ isDefault }) => ({
  position: "relative",
  padding: `${isDefault ? "1.5rem 0.8rem" : "10px"}`,
}));

export const CartItemContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isAvailable" && prop !== "isDefault",
})(({ isAvailable, isDefault }) => ({
  display: "flex",

  opacity: `${isAvailable ? 1 : 0.3}`,
  pointerEvents: `${isAvailable ? "auto" : "none"}`,

  gap: `${isDefault ? "1rem" : "10px"}`,
}));

export const CartItemBodyStyled = styled("div")({
  position: "relative",

  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

export const CartItemLink = styled(Link)({
  "&:hover": {
    textDecoration: "underline",
  },
});
