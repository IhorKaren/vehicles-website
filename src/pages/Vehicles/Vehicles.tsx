import { useState } from "react";
import { Container, Box } from "@mui/material";
import Filter from "../../components/Filter/Filter";
import SortBy from "../../components/SortBy/SortBy";
import VehiclesFilter from "../../components/VehiclesFilter/VehiclesFilter";
import ItemList from "../../components/ItemList/ItemList";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import VehicleItem from "../../components/VehicleItem/VehicleItem";
import { carsData } from "./data";

const Vehicles = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
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
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            py: "20px",
            flexShrink: 0,
          }}
        >
          <Filter onClick={toggleDrawer} />
          <SortBy />
        </Box>
        <Box
          sx={{
            py: "20px",
          }}
        >
          <ItemList data={carsData} component={VehicleItem} />
        </Box>
      </Box>
      <FilterSidebar isOpen={isOpen} onClick={toggleDrawer}>
        <VehiclesFilter />
      </FilterSidebar>
    </Container>
  );
};

export default Vehicles;
