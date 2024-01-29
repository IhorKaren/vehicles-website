import { styled } from "@mui/material";

import hero from "@/assets/hero/hero.webp";
import { AppContainer } from "../../shared";

export const HeroSectionStyled = styled("section")(() => ({
  height: "500px",

  paddingTop: "20px",
  paddingBottom: "20px",
}));

const backgroundDarkColor = "rgba(0, 0, 0, 0.3)";
export const HeroContainerStyled = styled(AppContainer)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  height: "100%",

  background: `linear-gradient( ${backgroundDarkColor}, ${backgroundDarkColor} ),url(${hero})`,
  backgroundSize: "100% auto",
  backgroundPosition: "center, center -150px",
  backgroundRepeat: "no-repeat",

  borderRadius: "20px",
}));
