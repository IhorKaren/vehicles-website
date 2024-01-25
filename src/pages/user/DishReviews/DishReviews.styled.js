import { Rating, Skeleton } from "@mui/material";

import { DishImage, DishName } from "@/components/DishCard/DishCard.styled";
import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  height: 100%;
`;

export const DishInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const DishImageStyled = styled(DishImage)`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const SkeletonStyled = styled(Skeleton)`
  height: 300px;
  width: 300px;
  border-radius: 20px;
`;

export const NoReviewsMessage = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DishNameStyled = styled(DishName)`
  min-height: 20px;
`;

export const RatingStyled = styled(Rating)`
  background: none;
`;
