import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { route } from "@/constants";
import { selectIsAuth } from "@/redux/auth/selectors";

// Mock user data
const user = { isAuth: false, roles: ["user", "chef", "admin", ""] };

export const NotAuthUserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isAuth = user.isAuth;
  // const isAuth = useSelector(selectIsAuth);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <FaUser />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {!isAuth && (
          <MenuItem onClick={handleMenuClose}>
            <Link to={route.SIGN_UP}>Sign up</Link>
          </MenuItem>
        )}
        {!isAuth && (
          <MenuItem onClick={handleMenuClose}>
            <Link to={route.SIGN_IN}>Sign in</Link>
          </MenuItem>
        )}
      </Menu>
    </>
  );
};
