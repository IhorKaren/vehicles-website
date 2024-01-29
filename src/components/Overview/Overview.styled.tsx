import { Link } from "react-router-dom";

import { Box, styled } from "@mui/material";
import { AppContainer } from "../../shared";

export const OverviewSection = styled(Box)({});

OverviewSection.defaultProps = {
  component: "section",
};

export const OverviewContainerStyled = styled(AppContainer)(() => ({}));

export const OverviewHeaderWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
});

export const OverviewSeeAllLinkStyled = styled(Link)(({ theme }) => ({
  fontSize: "20px",

  transition: "color 250ms ease-out",

  "&:hover": {
    textDecoration: "underline",
    color: `${theme.palette.primary.main}`,
  },
}));
