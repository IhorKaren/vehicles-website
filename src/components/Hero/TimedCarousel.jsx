

import React, { useState, useEffect } from 'react';
import { Box, Slide, Typography } from '@mui/material';

export const TimedCarousel = ({ items, time = 4000, ...restProps }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inProp, setInProp] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setInProp(false); // Сначала скрываем текущий элемент
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
    <Box container height={70} {...restProps}>
      {items.map((item, index) => (
        <Slide
          key={index}
          direction="left"
          in={inProp && currentIndex === index}
          mountOnEnter
          unmountOnExit
        >
          <Typography variant="h3" fontWeight={700} color="orange">{item.label}</Typography>
        </Slide>
      ))}
    </Box>
  );
};
