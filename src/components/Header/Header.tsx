import { useState, MouseEvent } from "react";
import { AppDispatch } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { user, logOut, isLoggedIn } from "../../redux/auth";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import Sidebar from "../Sidebar/Sidebar";
import Searchbar from "../Searchbar/Searchbar";
import Badge from "@mui/material/Badge";
import { route } from "../../constants/route.js";
import { navPages, userPages } from "../../constants/navPages";
import { customColors } from "../../constants/customColors";
import logosymbol from "../../assets/logosymbol.png";

function Header() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const isLogged: boolean = useSelector(isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();

  const { firstName, lastName } = useSelector(user);
  const userInitials = firstName.slice(0, 1) + lastName.slice(0, 1);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const hadleLogOutClick = () => {
    dispatch(logOut());
    handleCloseUserMenu();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: customColors.linearGradient,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", gap: { xs: "10px", md: "15px" } }}
        >
          <Link to={route.HOME}>
            {" "}
            <img src={logosymbol} alt="cambizs" width="70px"></img>
          </Link>

          <Box
            sx={{
              width: "100%",
              ml: "auto",
            }}
          >
            <Searchbar />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navPages.map((page) => (
              <Button
                component={Link}
                key={page.link}
                to={page.link}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Sidebar isLogged={isLogged} onClick={hadleLogOutClick} />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 0 }}>
            <Badge overlap="circular" variant="dot" color="secondary">
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>
                    {userInitials === "" ? <PersonIcon /> : userInitials}
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Badge>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!isLogged ? (
                <Box>
                  <MenuItem>
                    <Button
                      component={Link}
                      to={route.SIGN_IN}
                      onClick={handleCloseUserMenu}
                    >
                      Login
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      component={Link}
                      to={route.SIGN_UP}
                      onClick={handleCloseUserMenu}
                    >
                      Register
                    </Button>
                  </MenuItem>
                </Box>
              ) : (
                <Box>
                  <MenuItem sx={{ p: 0 }}>
                    <Button
                      component={Link}
                      to={route.USER_ACCOUNT}
                      onClick={handleCloseUserMenu}
                      fullWidth
                      sx={{ p: 2 }}
                    >
                      <Typography textTransform="capitalize">
                        Profile
                      </Typography>
                    </Button>
                  </MenuItem>
                  {userPages.map(({ label, link }) => (
                    <MenuItem key={label} sx={{ p: 0 }}>
                      {label === route.NOTIFICATIONS ? (
                        <Button
                          component={Link}
                          to={`/user-account/${link}`}
                          onClick={handleCloseUserMenu}
                          fullWidth
                          sx={{ p: 2 }}
                        >
                          <Typography
                            textTransform="capitalize"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            {label}
                            <Badge
                              overlap="circular"
                              badgeContent={1}
                              color="primary"
                            ></Badge>
                          </Typography>
                        </Button>
                      ) : (
                        <Button
                          component={Link}
                          to={`/user-account/${link}`}
                          onClick={handleCloseUserMenu}
                          fullWidth
                          sx={{ p: 2 }}
                        >
                          <Typography textTransform="capitalize">
                            {label}
                          </Typography>
                        </Button>
                      )}
                    </MenuItem>
                  ))}
                  <MenuItem sx={{ p: 0 }}>
                    <Button onClick={hadleLogOutClick} fullWidth sx={{ p: 2 }}>
                      <Typography textTransform="capitalize">Logout</Typography>
                    </Button>
                  </MenuItem>
                </Box>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
