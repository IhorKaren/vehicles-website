import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Container,
  Link,
  Box,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { userPages } from "../../constants/navPages";

const Profile = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography mb={5} variant="h5">
        My dashboard
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <List
            sx={{
              width: "320px",
              backgroundColor: "#F5F7FF",
            }}
          >
            {userPages.map((page) => (
              <ListItem>
                <Link
                  key={page.label}
                  component={NavLink}
                  color="text.primary"
                  underline="none"
                  to={page.link}
                >
                  <Typography variant="body1">{page.label}</Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
