import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import mockUser from "../../../components/CarouselVehicles/VehicleCard/mockdata/data";
import { useEffect, useState } from "react";
import { customColors } from "../../../constants/customColors";
import StarIcon from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";
import AppButton from "../../../shared/Buttons/AppButton";
import copy from "copy-to-clipboard";
import { Vehicle } from "./../../../App.types";

type TopTitleProps = {
  id: number | string | undefined;
  vehicle: Vehicle;
};
export const TopTitle: React.FC<TopTitleProps> = ({ id, vehicle }) => {
  const userId: string = mockUser[0]?.id;

  const [favorite, setFavorite] = useState(false);

  const favoriteVehiclesIds = mockUser[0]?.favoriteVehicles;

  useEffect(() => {
    const foundVehicle = favoriteVehiclesIds?.includes(Number(id));
    if (foundVehicle) {
      setFavorite(true);
    }
  }, [favoriteVehiclesIds]);

  const handleAddFavorites = () => {
    if (!favorite) {
      setFavorite(!favorite);
    } else {
      setFavorite(!favorite);
    }
  };

  const handleCopyURL = () => {
    const copied = copy(window.location.href);
    if (copied) {
      console.log("URL copied to clipboard");
    } else {
      console.error("Failed to copy URL");
    }
  };
  const theme = useTheme();

  const isSmOrDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "1.6rem",
            fontWeight: "700",
            lineHeight: "1.2",
            mb: "0.1rem",
          }}
        >
          {`${vehicle?.year} ${vehicle?.make} ${vehicle?.model}`}
        </Typography>
        {isSmOrDown && (
          <IconButton
            onClick={handleAddFavorites}
            sx={{
              color: favorite ? customColors.primaryColor : "",
              ml: "auto",
            }}
          >
            <StarIcon />
          </IconButton>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "baseline",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              background: "rgb(85, 157, 85)",
              marginRight: 0.5,
              px: 0.5,
              py: 0.1,
              height: 1,
              fontSize: "0.6rem",
              fontWeight: "700",
              lineHeight: "1.9",
              borderRadius: "5px",
              color: theme.palette.common.white,
              textTransform: "uppercase",
            }}
          >
            No Reserve
          </Typography>
          <Typography variant="subtitle1">{`${vehicle?.fuelConsumption} ${vehicle?.engineSize} ${vehicle?.type}`}</Typography>
        </Box>

        <AppButton
          sx={{
            mt: { xs: 2, sm: 0 },
            width: { xs: "100%", sm: "auto" },
            marginLeft: "auto",
            backgroundColor: "#f1f3f4",
            color: "#262626",
            "&:hover": {
              backgroundColor: { xs: "transparent" },
            },
          }}
          onClick={() => handleCopyURL()}
          label="Share"
          endIcon={<ShareIcon />}
        />
        {userId
          ? !isSmOrDown && (
              <AppButton
                sx={{
                  ml: 1,
                  backgroundColor: "#f1f3f4",
                  color: "#262626",
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: { xs: "transparent" },
                  },
                }}
                onClick={() => handleAddFavorites()}
                label="Follow"
                endIcon={
                  <StarIcon
                    style={{
                      color: favorite ? customColors.primaryColor : "",
                    }}
                  />
                }
              />
            )
          : ""}
      </Box>
    </>
  );
};
