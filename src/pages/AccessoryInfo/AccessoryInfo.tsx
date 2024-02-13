import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";

import { useParams } from "react-router-dom";
import { accessoriesData } from "../../components/CarouselAccessories/data";
import { Accessory } from "../../App.types";
import { SwiperPhotos } from "../../shared/SwiperPhotos/SwiperPhotos";
import { StickyPrice } from "./ui/StickyPrice";
import { TopTitle } from "./ui/TopTitle";

export const AccessoryInfo = () => {
  const { id } = useParams();
  const accessory: Accessory = accessoriesData.find(
    (accessory) => accessory.id === Number(id),
  ) as Accessory;

  const theme = useTheme();

  const isSmOrDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg">
      {isSmOrDown && <StickyPrice accessory={accessory} />}

      <Grid
        container
        spacing={2}
        sx={{ paddingTop: { xs: "0.4rem", sm: "1.5rem" } }}
      >
        <Grid item xs={12} order={{ xs: 3, sm: 1 }}>
          <TopTitle id={id} accessory={accessory} />
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
          <SwiperPhotos photos={accessory.img} />
        </Grid>
      </Grid>
      {!isSmOrDown && <StickyPrice accessory={accessory} />}
    </Container>
  );
};
