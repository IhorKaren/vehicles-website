import { useState } from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Box, Button, Typography } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

// import SearchBar from './searchBar.jsx';
import Logo from "@/assets/logosymbol.png";
import Logotext from "@/assets/logotext.png";
import {
  AppBarStyled,
  MenuWrapper,
  ToolbarStyled,
} from "@/components/Header/Header.styled.js";
import { NavigateMenu } from "@/components/NavigateMenu/NavigateMenu.jsx";
import { NotAuthUserMenu } from "@/components/NotAuthUserMenu/NotAuthUserMenu.jsx";
import { UserMenu } from "@/components/UserMenu/UserMenu.jsx";
import { IconButtonStyled } from "@/components/UserMenu/UserMenu.slyled.js";
import { route } from "@/constants/route.js";
import { SearchBar } from "../SearchBar/SearchBar ";
// import { selectIsAuth } from "@/redux/auth/selectors.js";

// import {
//   selectTheme,
//   toggleTheme,
// } from "../../../../../redux/slices/themeSlice";
// Mock user data

const user = {
  isAuth: false,
  roles: ["user", "chef", "admin", ""],
  darkMode: false,
};
// [darkMode, setDarkMode] = useState(false);
const pages = [
  {
    label: "Vehicles",
    link: "/vehicles",
  },
  {
    label: "Accessories",
    link: "/accessories",
  },
  {
    label: "Auctions",
    link: "/auctions",
  },
  {
    label: "Sell",
    link: "/sell",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setdarkMode] = useState(false);
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  // const isAuth = useSelector(selectIsAuth);
  const isAuth = user.isAuth;

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const handleThemeToggle =
    // useCallback(
    () => {
      setdarkMode(!darkMode);
      // dispatch(toggleTheme());
      console.log(darkMode);
    };
  // }, [darkMode]);

  return (
    <>
      <AppBarStyled sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Box>
          <ToolbarStyled>
            <Link
              to={route.HOME}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Logo} alt="logo" style={{ maxHeight: "50px" }} />
              {!matchesMD && (
                <img
                  src={Logotext}
                  alt="logotext"
                  style={{ maxWidth: "300px" }}
                />
              )}
            </Link>
            <MenuWrapper>
              <SearchBar />

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: "center" }}>
                {pages.map((page) => (
                  <Button
                    LinkComponent={RouterLink}
                    key={page.link}
                    to={page.link}
                    sx={{
                      ml: 3,
                      display: "block",
                    }}
                  >
                    <Typography variant="navText">{page.label}</Typography>
                  </Button>
                ))}
              </Box>
              <IconButton
                size="large"
                edge="start"
                sx={{ color: "darkOrange" }}
                onClick={handleThemeToggle}
              >
                {darkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
              </IconButton>
              {!isAuth && <NotAuthUserMenu />}
              {isAuth && <UserMenu />}
            </MenuWrapper>

            <IconButtonStyled
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon sx={{ width: 35, height: 35 }} />
            </IconButtonStyled>
          </ToolbarStyled>
        </Box>
        <SwipeableDrawer
          anchor={"left"}
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          <NavigateMenu onClose={toggleDrawer} onOpen={toggleDrawer} />
        </SwipeableDrawer>
      </AppBarStyled>
    </>
  );
};

export default Header;
