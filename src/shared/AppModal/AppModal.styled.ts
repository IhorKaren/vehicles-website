import { Box, IconButton, lighten } from "@mui/material";

import styled from "@emotion/styled";

export const IconButtonStyled = styled(IconButton)`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${({ theme }) => lighten(theme.palette.text.secondary, 0.4)};
  padding: 0;
  background-color: transparent;
  border-radius: 50%;
  transition:
    color 250ms linear,
    transform 250ms linear;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    transform: rotate(180deg);
  }
  z-index: 2;
`;

export const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 200px;
  max-width: 700px;
  background-color: ${({ theme }) => `${theme.palette.background.paper}`};
  border: 1px solid ${({ theme }) => `${theme.palette.primary.main}`};
  border-radius: 16px;
  box-shadow: ${({ theme }) => `${theme.shadows[24]}`};
  padding: 40px;
`;
