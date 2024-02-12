import { CSSProperties, FC } from "react";
import { CustomSideSwiper } from "./CustomSwiper.styled";
import { Scrollbar, A11y, Thumbs, FreeMode, Mousewheel } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

interface SideSwiperProps {
  setThumbsSwiper: any;
  photos: string[];
  style?: CSSProperties;
}
const SideSwiper: FC<SideSwiperProps> = ({
  setThumbsSwiper,
  photos,
  style,
}) => {
  return (
    <CustomSideSwiper
      direction={"vertical"}
      watchSlidesProgress
      onSwiper={setThumbsSwiper}
      modules={[FreeMode, Scrollbar, A11y, Thumbs, Mousewheel]}
      mousewheel={{
        sensitivity: 0.5,
      }}
      style={{ ...style }}
      scrollbar={{ draggable: true, dragClass: "swiper-scrollbar-custom" }}
      slidesPerView={3}
      spaceBetween={3}
      freeMode={true}
    >
      {photos.map((photo: any, index: number) => (
        <SwiperSlide key={index}>
          <img
            src={photo}
            alt={`Apartment ${index + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </CustomSideSwiper>
  );
};

export default SideSwiper;
