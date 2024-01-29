import React, { useState, useEffect } from "react";
import { Box, BoxProps, Slide, Typography } from "@mui/material";

type TimedCarouselProps = {
  items: { label: string }[];
  time?: number;
} & BoxProps;

export const TimedCarousel: React.FC<TimedCarouselProps> = ({
  items,
  time = 4000,
  ...restProps
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [inProp, setInProp] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setInProp(false); // Hide the current element first
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setInProp(true);
      }, 500);
    }, time);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, time]);

  return (
    <Box height={70} {...restProps}>
      {items.map((item, index) => (
        <Slide
          key={index}
          direction="left"
          in={inProp && currentIndex === index}
          mountOnEnter
          unmountOnExit
        >
          <Typography variant="h3" fontWeight={700} color="orange">
            {item.label}
          </Typography>
        </Slide>
      ))}
    </Box>
  );
};
