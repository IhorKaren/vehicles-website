import { useState } from "react";
import { Container, Box } from "@mui/material";
import Filter from "../../components/Filter/Filter";
import SortBy from "../../components/SortBy/SortBy";
import AccessoriesFilter from "../../components/AccessoriesFilter/AccessoriesFilter";
import ItemList from "../../components/ItemList/ItemList";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import AccessoryItem from "../../components/AccessoryItem/AccessoryItem";
import { accessoriesData } from "./data";

const Accessories = () => {
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
            <AccessoriesFilter />
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
          <Filter onClick={toggleDrawer}>
            <SortBy />
          </Filter>
        </Box>
        <Box
          sx={{
            py: "20px",
          }}
        >
          <ItemList data={accessoriesData} component={AccessoryItem} />
        </Box>
      </Box>
      <FilterSidebar isOpen={isOpen} onClick={toggleDrawer}>
        <AccessoriesFilter />
      </FilterSidebar>
    </Container>
  );
};

export default Accessories;
