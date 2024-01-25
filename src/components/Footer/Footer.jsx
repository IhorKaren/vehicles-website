import { Link } from "react-router-dom";

import Container from "@mui/material/Container";

import { Logo } from "@/assets/logo3color.png";
import styled from "@emotion/styled";
import { SocialMediaLinksList } from "../SocialMediaLinksList/SocialMediaLinksList";
import {
  ContentWrapper,
  FooterStyled,
  FooterText,
  SocLinksAndTextWrapper,
} from "./Footer.styled";

const LogoLink = styled(Link)`
  width: 64px;

  &:focus,
  &:hover {
    & > svg {
      fill: #384bad;
    }
  }

  & > svg {
    transition: fill 0.3s ease;
    fill: #d7cec9;
  }
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <Container fixed>
        <ContentWrapper>
          <LogoLink to="#" aria-label="logo" tabIndex="0">
            <img src="{Logo}" alt="Logo" />
          </LogoLink>
          <SocLinksAndTextWrapper>
            <SocialMediaLinksList />
            <FooterText>Designed by ... - 2024</FooterText>
          </SocLinksAndTextWrapper>
          <FooterText>&#169; All rights reserved</FooterText>
        </ContentWrapper>
      </Container>
    </FooterStyled>
  );
};
