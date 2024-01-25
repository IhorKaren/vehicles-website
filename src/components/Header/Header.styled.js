import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

import styled from "@emotion/styled";

export const AppBarStyled = styled(AppBar)`
  background: ${({ theme }) => theme.palette.background.default};
  /* position: sticky; */
  /* background-color: #0f0f0f; */
`;

export const MenuWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: strech;
  gap: 10px;
`;

export const ToolbarStyled = styled(Toolbar)`
  align-items: flex-start;
  justify-content: space-between;
  /* @media screen and (min-width: 320px) {
    padding: 0;
  } */
`;
