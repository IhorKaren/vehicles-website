import { FC } from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Vehicle } from "../../App.types";
import { route } from "../../constants/route";
import { Link } from "react-router-dom";

type VehicleItemProps = {
  item: Vehicle;
};

const VehicleItem: FC<VehicleItemProps> = ({ item }) => {
  const {
    id,
    price,
    make,
    model,
    year,
    type,
    fuelConsumption,
    engineSize,
    img,
  } = item;

  return (
    <ListItem sx={{ width: 290, p: 0 }}>
      <Link to={`${route.VEHICLES}/${id}`}>
        <Card sx={{ width: "100%" }}>
          <CardActionArea>
            <Box position="relative">
              <CardMedia
                component="img"
                height="140"
                image={img[0]}
                alt={make}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  p: 0.3,
                  borderRadius: "4px",
                  backgroundColor: "rgba(255, 123, 0, 0.849)",
                  backdropFilter: "blur(3px)",
                }}
              >
                <Typography variant="body1" color="text.primary">
                  Price: {price}
                </Typography>
              </Box>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                {`${make} ${model}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${year}, ${fuelConsumption}, ${engineSize}, ${type}`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </ListItem>
  );
};

export default VehicleItem;
