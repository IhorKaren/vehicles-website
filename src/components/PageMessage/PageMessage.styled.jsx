import { Box, styled } from "@mui/material";

export const PageMessageStyled = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  flexGrow: 1,
});

PageMessageStyled.defaultProps = {
  component: "section",
};

export const PageMessageImage = styled(Box)({});

PageMessageImage.defaultProps = {
  component: "img",
};
