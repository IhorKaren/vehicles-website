import { FC } from "react";
import List from "@mui/material/List";
import { Vehicle, Accessory } from "../../App.types";

type ItemListProps<T> = {
  data: T[];
  component: FC<{ item: T }>;
};

const ItemList = <T extends Vehicle | Accessory>({
  data,
  component: Component,
}: ItemListProps<T>) => {
  return (
    <List
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {data.map((el) => (
        <Component key={el.id} item={el} />
      ))}
    </List>
  );
};

export default ItemList;
