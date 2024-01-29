import { AppBar, Theme } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

import styled from "@emotion/styled";

export const AppBarStyled = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  background: theme.palette.background.default,
  paddingTop: "5px",
  /* position: sticky; */
  /* backgroundColor: '#0f0f0f', */
}));

export const MenuWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ToolbarStyled = styled(Toolbar)`
  min-height: 55px;
  align-items: flex-start;
  justify-content: space-between;
  /* @media screen and (min-width: 320px) {
    padding: 0;
  } */
`;
