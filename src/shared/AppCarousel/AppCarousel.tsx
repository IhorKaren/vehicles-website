import Slider, { Settings } from "react-slick";
import { AppCarouselWrapper } from "./AppCarousel.styled";
import { ReactNode } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AppCarouselStyles.css";
type AppCarouselProps = {
  children: ReactNode;
};

export const AppCarousel = ({ children }: AppCarouselProps) => {
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    // autoplaySpeed: 10000,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <AppCarouselWrapper>
      <Slider {...settings}>{children}</Slider>
    </AppCarouselWrapper>
  );
};
