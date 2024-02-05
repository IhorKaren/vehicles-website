import { Container, Box } from "@mui/material";
import Filter from "../../components/Filter/Filter";
import SortBy from "../../components/SortBy/SortBy";
import VehiclesFilter from "../../components/VehiclesFilter/VehiclesFilter";
import ItemList from "../../components/ItemList/ItemList";

const Vehicles = () => {
  return (
    <Container sx={{ display: "flex", gap: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          py: "20px",
          maxWidth: "200px",
          flexShrink: 0,
        }}
      >
        <Filter>
          <SortBy />
          <VehiclesFilter />
        </Filter>
      </Box>
      <Box
        sx={{
          py: "20px",
        }}
      >
        <ItemList />
      </Box>
    </Container>
  );
};

export default Vehicles;
