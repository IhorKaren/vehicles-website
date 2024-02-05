import hero_test from "../../assets/hero_test.jpg";
import Container from "@mui/material/Container";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AdvancedSearch from "./AdvancedSearch";
import { TimedCarousel } from "./TimedCarousel";
import { FC } from "react";
import { carouselItems } from "../../constants/carouselItems";

const backgroundDarkColor = "rgba(0, 0, 0, 0.3)";

const BackgroundOverlayBox = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  background: `linear-gradient( ${backgroundDarkColor}, ${backgroundDarkColor} ),url(${hero_test})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  overflow: "hidden",

  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",

    backdropFilter: "blur(3px)",
  },
}));

export const Hero: FC = () => {
  return (
    <BackgroundOverlayBox sx={{ py: 10, px: 1 }}>
      <Container sx={{ zIndex: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <AdvancedSearch />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ gap: 2, display: "flex", flexDirection: "column" }}
          >
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
      </Container>
    </BackgroundOverlayBox>
  );
};
