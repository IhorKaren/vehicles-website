import { styled, Typography } from "@mui/material";

export const CartItemTitleStyled = styled(Typography)(({ theme }) => ({
  cursor: "pointer",

  width: "fit-content",
  maxWidth: "170px",

  fontWeight: 600,

  "&:hover": {
    textDecoration: "underline",
    color: `${theme.palette.primary.main}`,
  },
}));
