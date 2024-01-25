import styled from "@emotion/styled";

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
