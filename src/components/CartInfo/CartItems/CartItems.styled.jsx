import { Box, styled } from "@mui/material";

export const CartItemsBoxStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDefault",
})(({ isDefault, theme }) => ({
  ...(isDefault
    ? {
        padding: "0 28px",
        boxSizing: "border-box",
        maxHeight: "calc(80vh - 60px - 56px)",
        overflow: "auto",
        marginBottom: "56px",
        minHeight: "400px",

        "&::-webkit-scrollbar": {
          width: "6px",
          backgroundColor: theme.palette.primary.light,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.primary.main,
        },
        scrollbarWidth: "thin",
        scrollbarColor: `${theme.palette.primary.main} ${theme.palette.primary.light}`,
      }
    : {}),
}));
