import { useState, FC } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { route } from "../../constants/route.js";
import { navPages } from "../../constants/navPages";

type SidebarProps = {
  isLogged: boolean;
  onClick: () => void;
};

const Sidebar: FC<SidebarProps> = ({ isLogged, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={() => toggleDrawer()}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"left"} open={isOpen} onClose={() => toggleDrawer()}>
        <Box
          sx={{ width: 250 }}
          component="nav"
          role="presentation"
          onClick={() => toggleDrawer()}
        >
          <List>
            {navPages.map((page) => (
              <ListItem key={page.link} disablePadding>
                <ListItemButton component={Link} to={page.link}>
                  <ListItemText primary={page.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          {!isLogged ? (
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={route.SIGN_IN}>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={route.SIGN_UP}>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>
            </List>
          ) : (
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={route.USER_ACCOUNT}>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={onClick}>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;
