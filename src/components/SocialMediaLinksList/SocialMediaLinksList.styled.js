import styled from "@emotion/styled";

export const SocLinkItem = styled.li`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const SocLinkList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const SocLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #ff7622;
  border-radius: 50%;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #ffffff;
  }
`;
