import { Box, Card, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import { scrollbarStyles } from "@/components/NotificationToast/helpers/scrollbarStyles";

export const StyledToast = styled(Box)(() => ({
  minWidth: "450px",
}));

export const StyledToastCard = styled(Card)(({ theme }) => ({
  maxHeight: "80vH",
  width: "100%",
  position: "relative",
  marginBottom: 8,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: "theme.palette.background.paper",
}));

export const StyledToastCardBox = styled(Box)(({ theme }) => ({
  maxHeight: "25vH",
  marginBottom: 16,
  ...scrollbarStyles(theme),
}));

export const StyledToastStack = styled(Stack)(() => ({
  position: "absolute",
  bottom: -5,
  left: 0,
  right: 0,
  padding: "10px 16px",
}));
