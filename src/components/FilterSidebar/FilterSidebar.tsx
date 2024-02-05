import { FC, ReactNode } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

type SidebarProps = {
  isOpen: boolean;
  children: ReactNode;
  onClick: () => void;
};

const FilterSidebar: FC<SidebarProps> = ({ isOpen, onClick, children }) => {
  return (
    <Box>
      <Drawer anchor={"right"} open={isOpen} onClose={() => onClick()}>
        <Box sx={{ width: 280, p: 2 }} component="div" role="filter">
          {children}
        </Box>
      </Drawer>
    </Box>
  );
};

export default FilterSidebar;
