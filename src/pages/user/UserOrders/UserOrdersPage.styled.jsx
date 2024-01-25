import { Box, styled } from "@mui/material";

import { AppContainer } from "@/shared";

export const UserOrdersPageSection = styled(Box)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
});

UserOrdersPageSection.defaultProps = {
  component: "section",
};

export const UserOrdersPageContainer = styled(AppContainer)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  flexGrow: 1,
});
