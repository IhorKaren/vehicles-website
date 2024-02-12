import { useState } from "react";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PriceSlider from "../PriceSlider/PriceSlider";
import { carList, years } from "./data";

const VehiclesFilter = () => {
  const [openMake, setOpenMake] = useState(false);
  const [openYear, setOpenYear] = useState(false);

  const onMakeClick = () => {
    setOpenMake(!openMake);
  };

  const onYearClick = () => {
    setOpenYear(!openYear);
  };

  return (
    <>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box>
          <Typography>REFINE BY</Typography>
          <Divider />
        </Box>
        <Box>
          <ListItemButton onClick={onMakeClick} sx={{ px: 0 }}>
            <ListItemText primary="Make" />
            {openMake ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider
            sx={{
              backgroundColor: "#333333",
              opacity: 0.4,
            }}
          />
          <Collapse in={openMake} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{ maxHeight: "206px", overflow: "auto" }}
            >
              <FormGroup>
                {carList.map((car, i) => (
                  <FormControlLabel
                    key={i}
                    control={<Checkbox />}
                    label={car.name}
                  />
                ))}
              </FormGroup>
            </List>
          </Collapse>
        </Box>
        <Box>
          <ListItemButton onClick={onYearClick} sx={{ px: 0 }}>
            <ListItemText primary="Year" />
            {openYear ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider
            sx={{
              backgroundColor: "#333333",
              opacity: 0.4,
            }}
          />
          <Collapse in={openYear} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{ maxHeight: "206px", overflow: "auto" }}
            >
              <FormGroup>
                {years.map((year, i) => (
                  <FormControlLabel
                    key={i}
                    control={<Checkbox />}
                    label={year}
                  />
                ))}
              </FormGroup>
            </List>
          </Collapse>
        </Box>
        <Box>
          <ListItemButton sx={{ px: 0 }}>
            <ListItemText primary="Engine" />
            {openYear ? <ExpandLess /> : <ExpandMore />}
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
            <ListItemText primary="Body Style" />
            {openYear ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider
            sx={{
              backgroundColor: "#333333",
              opacity: 0.4,
            }}
          />
        </Box>

        <PriceSlider min={0} max={20000} />
      </List>
    </>
  );
};

export default VehiclesFilter;
