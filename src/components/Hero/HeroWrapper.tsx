import { Hero } from "./Hero";
import { HeroContainerStyled, HeroSectionStyled } from "./Hero.styled";

const HeroWrapper = () => {
  return (
    <HeroSectionStyled>
      <HeroContainerStyled>
        <Hero />
      </HeroContainerStyled>
    </HeroSectionStyled>
  );
};

export default HeroWrapper;
