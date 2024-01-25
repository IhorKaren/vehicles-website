import InfiniteScroll from "react-infinite-scroll-component";

import styled from "@emotion/styled";

export const InfiniteScrollStyled = styled(InfiniteScroll)`
  margin-bottom: 20px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #e4dcdc;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff7622;
  }
`;

export const SkeletonCardItem = styled.li`
  min-height: 500px;
  max-height: 100%;
`;

export const SkeletonWrapper = styled.ul`
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 24px;
`;
