import { Link } from "react-router-dom";

import { Box, styled } from "@mui/material";

export const CartChefInfoStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDefault",
})(({ theme, isDefault }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",

  backgroundColor: `${theme.palette.grey[200]}`,

  ...(isDefault
    ? {
        padding: `10px 38px`,
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      }
    : {
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "10px",
      }),
}));

export const CartChefInfoLink = styled(Link)(({ theme }) => ({
  "&:hover": {
    textDecoration: "underline ",
    color: `${theme.palette.primary.main}`,
  },
}));
