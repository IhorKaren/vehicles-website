import { FC, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { CustomSwiper } from "./CustomSwiper.styled";
import SideSwiper from "./SideSwiper";

type SwiperPhotosProps = {
  photos: string[];
};
export const SwiperPhotos: FC<SwiperPhotosProps> = ({ photos }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div
      style={{
        display: "flex",
        gap: 2,

        height: "100%",
        width: "100%",
      }}
    >
      <CustomSwiper
        pagination={{
          type: "fraction",
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Navigation, Pagination, Thumbs]}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : undefined,
        }}
        style={{
          width: "100%",
          height: "auto",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
        slidesPerView={"auto"}
        spaceBetween={5}
        className="custom-swiper"
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
      </CustomSwiper>

      <SideSwiper
        photos={photos}
        setThumbsSwiper={setThumbsSwiper}
        style={{ width: "30%", height: "100%" }}
      />
    </div>
  );
};
