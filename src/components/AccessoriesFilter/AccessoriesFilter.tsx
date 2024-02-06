import { useState } from "react";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { carAccessoriesAndParts, brands } from "./data";

const AccessoriesFilter = () => {
  const [openAccessories, setOpenAccessories] = useState(false);
  const [openBrand, setOpenBrand] = useState(false);

  const onAccessoriesClick = () => {
    setOpenAccessories(!openAccessories);
  };

  const onBrandClick = () => {
    setOpenBrand(!openBrand);
  };

  return (
    <>
      <Box>
        <ListItemButton onClick={onAccessoriesClick} sx={{ px: 0 }}>
          <ListItemText primary="Accessories" />
          {openAccessories ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider
          sx={{
            backgroundColor: "#333333",
            opacity: 0.4,
          }}
        />
        <Collapse in={openAccessories} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ maxHeight: "206px", overflow: "auto" }}
          >
            <FormGroup>
              {carAccessoriesAndParts.map((el) => (
                <FormControlLabel
                  key={el.id}
                  control={<Checkbox />}
                  label={el.productType}
                />
              ))}
            </FormGroup>
          </List>
        </Collapse>
      </Box>
      <Box>
        <ListItemButton onClick={onBrandClick} sx={{ px: 0 }}>
          <ListItemText primary="Brand" />
          {openBrand ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider
          sx={{
            backgroundColor: "#333333",
            opacity: 0.4,
          }}
        />
        <Collapse in={openBrand} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ maxHeight: "206px", overflow: "auto" }}
          >
            <FormGroup>
              {brands.map((el) => (
                <FormControlLabel
                  key={el.id}
                  control={<Checkbox />}
                  label={el.brand}
                />
              ))}
            </FormGroup>
          </List>
        </Collapse>
      </Box>
      <Box>
        <ListItemButton sx={{ px: 0 }}>
          <ListItemText primary="Coverage" />
          {openBrand ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider
          sx={{
            backgroundColor: "#333333",
            opacity: 0.4,
          }}
        />
      </Box>
      <Box>
        <ListItemButton sx={{ px: 0 }}>
          <ListItemText primary="Finish" />
          {openBrand ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider
          sx={{
            backgroundColor: "#333333",
            opacity: 0.4,
          }}
        />
      </Box>
    </>
  );
};

export default AccessoriesFilter;
