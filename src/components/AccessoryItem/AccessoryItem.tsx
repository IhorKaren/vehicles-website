import { FC } from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Accessory } from "../../App.types";
import { Link } from "react-router-dom";
import { route } from "../../constants/route";

type AccessoryItemProps = {
  item: Accessory;
};

const AccessoryItem: FC<AccessoryItemProps> = ({ item }) => {
  const { name, brand, price, img, id } = item;

  return (
    <ListItem sx={{ width: 290, p: 0 }}>
      <Card sx={{ width: "100%" }}>
        <CardActionArea>
          <Box position="relative">
            <CardMedia component="img" height="140" image={img[0]} alt={name} />
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
          <Link to={`${route.ACCESSORIES}/${id}`}>

          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {brand}
            </Typography>
          </CardContent>
          </Link>

        </CardActionArea>
      </Card>
    </ListItem>
  );
};

export default AccessoryItem;
