import { Link, PathMatch } from "react-router-dom";
import { Theme } from "@mui/material";
import styled from "@emotion/styled";
interface LinkStyledProps {
  theme: Theme;
  match: PathMatch<string> | null;
}
export const LinkStyled = styled(Link)<LinkStyledProps>`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  width: 200px;
  font-size: 1rem;
  font-weight: ${({ match }) => (match ? 600 : 400)};

  color: ${({ theme, match }) =>
    match ? "white" : theme.palette.text.primary};

  background: ${({ theme, match }) =>
    match ? theme.palette.primary.main : "none"};
  box-shadow: ${({ theme, match }) =>
    match ? `2px 2px 5px 1px ${theme.palette.secondary.main}` : "none"};

  border-radius: 10px;

  transform-origin: center left;

  transition: all 100ms linear;
  &:hover,
  &:focus {
    color: ${({ theme, match }) =>
      match ? "white" : theme.palette.primary.main};
    transform: ${({ match }) => (match ? "scale(1)" : "scale(1.1)")};
  }
`;
