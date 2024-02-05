import List from "@mui/material/List";
import VehicleItem from "../VehicleItem/VehicleItem";
import { carsData } from "./data";

const ItemList = () => {
  return (
    <List
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {carsData.map((el) => (
        <VehicleItem key={el.id} item={el} />
      ))}
    </List>
  );
};

export default ItemList;
