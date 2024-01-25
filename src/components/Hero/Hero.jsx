import hero from "@/assets/hero/hero.webp";

import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { AdvancedSearch } from "./AdvancedSearch";
import { TimedCarousel } from "./TimedCarousel";

const backgroundDarkColor = "rgba(0, 0, 0, 0.3)";

const BackgroundOverlayBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  background: `linear-gradient( ${backgroundDarkColor}, ${backgroundDarkColor} ),url(${hero})`,
  backgroundSize: "100% auto",
  backgroundPosition: "center, center -150px",
  backgroundRepeat: "no-repeat",
}));

export const Hero = () => {
  const carouselItems = [
    {
      label: "Car",
    },
    {
      label: "Motorcycle",
    },
    {
      label: "Truck",
    },
    {
      label: "Accessories",
    },
  ];
  return (
    // <BackgroundImageBox>
    <BackgroundOverlayBox sx={{ py: 10, px: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <AdvancedSearch />
        </Grid>
        <Grid item xs={12} md={6} sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            color="common.white"
          >
            See for yourself!
          </Typography>
            <TimedCarousel items={carouselItems} />

          <Typography variant="subtitle1" color="common.white">
            Passenger cars, vans, light trucks and even margin cars or damaged
            vehicles, you’re sure to find what you’re looking for.
          </Typography>
        </Grid>
      </Grid>
    </BackgroundOverlayBox>
    // </BackgroundImageBox>
  );
};
