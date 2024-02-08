import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { route } from "../../constants/route";

const MyListings = () => {
  return (
    <Box p={1} width="100%">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "start" },
          gap: { xs: 1, md: 5 },
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Typography component="h2" variant="h6">
            My Listings
          </Typography>
          <Typography variant="body1">
            You have not submitted any cars yet. Want to sell your car?
          </Typography>
          <Button
            variant="outlined"
            component={NavLink}
            to={route.SELL}
            sx={{ maxWidth: "max-content" }}
          >
            Get started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MyListings;
