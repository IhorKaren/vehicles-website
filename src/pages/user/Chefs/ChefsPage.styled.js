import InfiniteScroll from "react-infinite-scroll-component";

import styled from "@emotion/styled";

export const InfiniteScrollStyled = styled(InfiniteScroll)`
  margin-bottom: 20px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #e4dcdc;
    /* border-radius: 8px; */
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff7622;
    /* border-radius: 8px; */
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6); */
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
