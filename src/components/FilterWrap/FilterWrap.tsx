import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import PriceSlider from "../PriceSlider/PriceSlider";

type FilterWrapProps = {
  children: ReactNode;
  min: number;
  max: number;
};

const FilterWrap: FC<FilterWrapProps> = ({ children, min, max }) => {
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
        {children}
        <PriceSlider min={min} max={max} />
      </List>
    </>
  );
};

export default FilterWrap;
