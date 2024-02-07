import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Container,
  Link,
  Box,
  List,
  ListItem,
  Typography,
  Divider,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { route } from "../../constants/route";
import { userPages } from "../../constants/navPages";

const Profile = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography mb={3} variant="h5">
        My dashboard
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "start", sm: "stretch" },
          mb: "100%",
        }}
      >
        <Box>
          <List
            sx={{
              display: { xs: "flex", md: "block" },
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <ListItem sx={{ maxWidth: "max-content", pl: 0 }}>
              <Link
                component={NavLink}
                color="text.primary"
                underline="none"
                to={route.USER_ACCOUNT}
              >
                <Typography variant="body1">Profile</Typography>
              </Link>
            </ListItem>
            {userPages.map(({ label, link }) => (
              <ListItem key={label} sx={{ maxWidth: "max-content", pl: 0 }}>
                <Link
                  component={NavLink}
                  color="text.primary"
                  underline="none"
                  to={link}
                >
                  {label === route.NOTIFICATIONS ? (
                    <Typography
                      textTransform="capitalize"
                      variant="body1"
                      sx={{ display: "flex", alignItems: "center", gap: 2 }}
                    >
                      {label}
                      <Badge badgeContent={1} color="primary"></Badge>
                    </Typography>
                  ) : (
                    <Typography textTransform="capitalize" variant="body1">
                      {label}
                    </Typography>
                  )}
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </Box>
    </Container>
  );
};

export default Profile;
