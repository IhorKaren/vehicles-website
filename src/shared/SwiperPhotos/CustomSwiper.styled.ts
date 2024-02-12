import { styled } from "@mui/material";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  .swiper-pagination-fraction {
    color: #ffff;
    width: 8rem;
    padding: 5px 10px;
    background: rgba(51, 54, 63, 0.35);
    border-radius: 11.4px;
    left: 55%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #559d55 !important;
  }
`;

export const CustomSideSwiper = styled(Swiper)`
  .swiper-vertical > .swiper-scrollbar,
  .swiper-scrollbar.swiper-scrollbar-vertical {
    width: 0.5rem;
    background: #e8eaea;
    border-radius: 1.93px;
  }
  .swiper-scrollbar-custom {
    border-radius: 1.93px;
    background: #c4c4c4;
  }
`;
