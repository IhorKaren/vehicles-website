import { Box } from "@mui/material";

import styled from "@emotion/styled";

export const AppImageThumbStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  flexShrink: 0,
  overflow: "auto",

  backgroundColor: `${theme.palette.grey[400]}`,
}));

export const AppImageStyled = styled("img")({
  display: "block",

  width: "auto",
  height: "100%",

  objectFit: "cover",
  objectPosition: "center",
});
