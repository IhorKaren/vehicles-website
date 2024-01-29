import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import {
  OverviewContainerStyled,
  OverviewHeaderWrapper,
  OverviewSection,
  OverviewSeeAllLinkStyled,
} from "./Overview.styled";

export interface OverviewProps {
  title: string;
  component: React.ReactNode;
  redirectTo: string;
}

const Overview: React.FC<OverviewProps> = ({
  title,
  component,
  redirectTo,
}) => {
  return (
    <OverviewSection>
      <OverviewContainerStyled>
        <OverviewHeaderWrapper>
          <Typography component="h2" variant="h4">
            {title}
          </Typography>
          <OverviewSeeAllLinkStyled as={Link} to={redirectTo}>
            See all
          </OverviewSeeAllLinkStyled>
        </OverviewHeaderWrapper>
        {component}
      </OverviewContainerStyled>
    </OverviewSection>
  );
};

export default Overview;
