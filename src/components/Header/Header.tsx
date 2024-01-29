import { useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Theme, useTheme } from "@mui/material";
import { Box, Button, Typography } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

// import SearchBar from './searchBar.jsx';
import Logo from "../../assets/logosymbol.png";
import {
  AppBarStyled,
  MenuWrapper,
  ToolbarStyled,
} from "../..//components/Header/Header.styled.js";
import { NavigateMenu } from "../..//components/NavigateMenu/NavigateMenu.jsx";
import { NotAuthUserMenu } from "../..//components/NotAuthUserMenu/NotAuthUserMenu.jsx";
import { UserMenu } from "../..//components/UserMenu/UserMenu.jsx";
import { IconButtonStyled } from "../..//components/UserMenu/UserMenu.slyled.js";
import { route } from "../..//constants/route.js";
import { SearchBar } from "../SearchBar/SearchBar ";
import { navPages } from "../../constants/navPages";

// Mock user data

const user = {
  isAuth: false,
  roles: ["user", "chef", "admin", ""],
  darkMode: false,
};
type NavPage = {
  label: string;
  link: string;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setdarkMode] = useState(false);
  const isAuth = user.isAuth;

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        ("type" in event && (event as React.KeyboardEvent).key === "Tab") ||
        (event as React.KeyboardEvent).key === "Shift"
      ) {
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
  const theme: Theme = useTheme();
  return (
    <>
      <AppBarStyled
        theme={theme}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Box component="header">
          <ToolbarStyled>
            <Link
              to={route.HOME}
              style={{
                flexGrow: 1,
                textAlign: "start",
              }}
            >
              <img src={Logo} alt="logo" style={{ maxHeight: "50px" }} />
            </Link>
            <MenuWrapper>
              <SearchBar />

              <Box
                component="nav"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}
              >
                {navPages.map((page: NavPage) => (
                  <Button
                    component={Link}
                    key={page.link}
                    to={page.link}
                    sx={{
                      ml: 3,
                      display: "block",
                    }}
                  >
                    <Typography variant="subtitle2">{page.label}</Typography>
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
