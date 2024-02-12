import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";

import { useParams } from "react-router-dom";
import { Vehicle } from "../../App.types";
import { carsData } from "../../components/CarouselVehicles/data";
import { SwiperPhotos } from "../../shared/SwiperPhotos/SwiperPhotos";
import { StickyPrice } from "./ui/StickyPrice";
import { TopTitle } from "./ui/TopTitle";

export const VehicleInfo = () => {
  const { id } = useParams();
  const vehicle: Vehicle = carsData.find(
    (vehicle) => vehicle.id === Number(id),
  ) as Vehicle;

  const theme = useTheme();

  const isSmOrDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg">
      {isSmOrDown && <StickyPrice vehicle={vehicle} />}

      <Grid
        container
        spacing={2}
        sx={{ paddingTop: { xs: "0.4rem", sm: "1.5rem" } }}
      >
        <Grid item xs={12} order={{ xs: 3, sm: 1 }}>
          <TopTitle id={id} vehicle={vehicle} />
        </Grid>

        <Grid
          item
          xs={12}
          order={{ xs: 2, sm: 2 }}
          sx={{
            maxHeight: { xs: "40vh", sm: "50vh", md: "60vh", lg: "70vh" },
            width: "100vw",
          }}
        >
          <SwiperPhotos photos={vehicle.img} />
        </Grid>
      </Grid>
      {!isSmOrDown && <StickyPrice vehicle={vehicle} />}
    </Container>
  );
};
