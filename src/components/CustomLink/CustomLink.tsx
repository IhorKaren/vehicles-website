import { PathMatch, useMatch } from "react-router-dom";
import { useTheme } from "@mui/material";
import { LinkStyled } from "./CustomLink.styled";

type CustomLinkProps = {
  children: React.ReactNode;
  to: string;
};
export const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  to,
}): JSX.Element => {
  const match: PathMatch<string> | null = useMatch(to);
  const theme = useTheme();
  return (
    <LinkStyled to={to} match={match} theme={theme}>
      {children}
    </LinkStyled>
  );
};
