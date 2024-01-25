import { Avatar } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

import {
  ChefCardPropTypes,
  defaultChefCardPropTypes,
} from "./ChefCardSkeleton.props";
import {
  ChefCardWrapper,
  CircleWrapper,
  RectangularWrapper,
} from "./ChefCardSkeleton.styled";

export const ChefCardSkeleton = ({ isCarousel }) => {
  return (
    <ChefCardWrapper isCarousel={isCarousel}>
      <CircleWrapper>
        <Skeleton variant="circular" sx={{ bgcolor: "#e2e2e2" }}>
          <Avatar />
        </Skeleton>
      </CircleWrapper>
      <RectangularWrapper>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ bgcolor: "#e2e2e2" }}
        ></Skeleton>
      </RectangularWrapper>

      <Skeleton variant="rectangular" width="100%" height="100%"></Skeleton>
    </ChefCardWrapper>
  );
};

ChefCardSkeleton.propTypes = ChefCardPropTypes;
ChefCardSkeleton.defaultProps = defaultChefCardPropTypes;
