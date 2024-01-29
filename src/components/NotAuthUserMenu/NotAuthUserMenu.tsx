import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { route } from "../../constants/route";

// Define types
type AnchorEl = HTMLElement | null;

// Mock user data
const user = { isAuth: false, roles: ["user", "seller", "admin", ""] };

export const NotAuthUserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);

  const isAuth = user.isAuth;

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        {" "}
        {/* Call handleMenuOpen directly */}
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
