import { Typography } from "@mui/material";

import { OverviewPropTypes } from "./Overview.props";
import {
  OverviewContainerStyled,
  OverviewHeaderWrapper,
  OverviewSection,
  OverviewSeeAllLinkStyled,
} from "./Overview.styled";

const Overview = ({ title, component, redirectTo, ...props }) => {
  return (
    <OverviewSection {...props}>
      <OverviewContainerStyled>
        <OverviewHeaderWrapper>
          <Typography component="h2" variant="h4">
            {title}
          </Typography>
          <OverviewSeeAllLinkStyled to={redirectTo} variant="subtitle1">
            See all
          </OverviewSeeAllLinkStyled>
        </OverviewHeaderWrapper>
        {component}
      </OverviewContainerStyled>
    </OverviewSection>
  );
};

Overview.propTypes = OverviewPropTypes;

export default Overview;
