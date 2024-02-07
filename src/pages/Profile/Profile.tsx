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
          gap: { xs: 1, md: 3 },
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
            {userPages.map(({ label, link }) => (
              <ListItem key={label} sx={{ maxWidth: "max-content" }}>
                <Link
                  component={NavLink}
                  color="text.primary"
                  underline="none"
                  to={link}
                >
                  {label === "Notifications" ? (
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", alignItems: "center", gap: 2 }}
                    >
                      {label}
                      <Badge badgeContent={1} color="primary"></Badge>
                    </Typography>
                  ) : (
                    <Typography variant="body1">{label}</Typography>
                  )}
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
