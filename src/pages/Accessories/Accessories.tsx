import { useState } from "react";
import { Container, Box } from "@mui/material";
import Filter from "../../components/Filter/Filter";
import FilterWrap from "../../components/FilterWrap/FilterWrap";
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
        <Filter>
          <SortBy />
          <FilterWrap min={0} max={5000}>
            <AccessoriesFilter />
          </FilterWrap>
        </Filter>
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
        <FilterWrap min={0} max={5000}>
          <AccessoriesFilter />
        </FilterWrap>
      </FilterSidebar>
    </Container>
  );
};

export default Accessories;
