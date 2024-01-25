/* eslint-disable no-unused-vars */
import { useMatch } from "react-router-dom";

import { customLinkProps } from "./CustomLink.props";
import { LinkStyled } from "./CustomLink.styled";

export const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <LinkStyled to={to} match={match}>
      {children}
    </LinkStyled>
  );
};

CustomLink.propTypes = customLinkProps;
