import { Avatar, Typography, useTheme } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import {
  ButtonsSkeletonWrapper,
  CircleWrapper,
  VehCardWrapper,
  RectangularWrapper,
  TitleSkeletonWrapper,
} from "./VehCardSkeleton.styled";
type VehCardSkeletonProps = {
  isCarousel: boolean;
};
export const VehCardSkeleton: React.FC<VehCardSkeletonProps> = ({
  isCarousel,
}): JSX.Element => {
  const theme = useTheme();
  return (
    <VehCardWrapper isCarousel={isCarousel} theme={theme}>
      <CircleWrapper>
        <Skeleton variant="circular" sx={{ bgcolor: "#e2e2e2" }}>
          <Avatar />
        </Skeleton>
      </CircleWrapper>
      <RectangularWrapper>
        <TitleSkeletonWrapper>
          <Typography variant="h3" width="85%">
            <Skeleton sx={{ bgcolor: "#e2e2e2" }} />
          </Typography>
        </TitleSkeletonWrapper>

        <ButtonsSkeletonWrapper>
          <Skeleton
            variant="rectangular"
            width="50%"
            height="100%"
            sx={{ bgcolor: "#e2e2e2", borderRadius: "5px" }}
          ></Skeleton>
          <Skeleton
            variant="rectangular"
            width="30%"
            height="100%"
            sx={{ bgcolor: "#e2e2e2", borderRadius: "5px" }}
          ></Skeleton>
        </ButtonsSkeletonWrapper>
      </RectangularWrapper>

      <Skeleton variant="rectangular" width="100%" height="100%"></Skeleton>
    </VehCardWrapper>
  );
};
