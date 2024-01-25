import { Paper } from "@mui/material";

import { MyTabs} from "../TabPanel/TabPanel";
import { data } from "./data";
export const AdvancedSearch = () => {
  return <Paper sx={{ p: 2 }}>
    <MyTabs
    items={data} 
    />
    </Paper>;
};