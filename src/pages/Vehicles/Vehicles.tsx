import { Container } from "@mui/material";
import Filter from "../../components/Filter/Filter";
import SortBy from "../../components/SortBy/SortBy";
import VehiclesFilter from "../../components/VehiclesFilter/VehiclesFilter";

const Vehicles = () => {
  return (
    <Container>
      <Filter>
        <SortBy />
        <VehiclesFilter />
      </Filter>
    </Container>
  );
};

export default Vehicles;
