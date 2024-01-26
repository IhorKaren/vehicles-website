import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      color="default"
      component="header"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, textAlign: "start" }}
        >
          Company name
        </Typography>
        <nav>
          <Link
            component={NavLink}
            to="/home"
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5 }}
          >
            Home
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Enterprise
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Support
          </Link>
        </nav>
        <Button
          component={NavLink}
          to="/auth/SignIn"
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          Login
        </Button>
        <Button
          component={NavLink}
          to="/auth/SignUp"
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
