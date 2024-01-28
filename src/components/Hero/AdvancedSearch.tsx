import React from "react";
import { Paper } from "@mui/material";
import { MyTabs } from "../TabPanel/TabPanel";
import { data } from "./data";

const AdvancedSearch: React.FC = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <MyTabs items={data} defaultActive={0} />
    </Paper>
  );
};

export default AdvancedSearch;
