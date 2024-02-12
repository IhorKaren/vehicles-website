import { FC, ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

type FilterProps = {
  children?: ReactNode;
  onClick?: () => void;
};

const Filter: FC<FilterProps> = ({ children, onClick }) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row-reverse", md: "row" },
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h6"
            textTransform="uppercase"
            sx={{
              display: { xs: "none", md: "block" },
              position: "relative",
              width: "max-content",
              mb: 2,
              "::before": {
                content: '""',
                position: "absolute",
                bottom: "50%",
                left: "105%",
                width: "100vw",
                height: "2px",
                backgroundColor: "#000",
              },
            }}
          >
            Filter
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={onClick}
            sx={{
              display: { xs: "flex", md: "none" },
              position: "relative",
              width: "max-content",
              "::before": {
                content: '""',
                position: "absolute",
                bottom: "50%",
                right: "105%",
                width: "100vw",
                height: "2px",
                backgroundColor: "#000",
              },
            }}
          >
            Filter <FilterAltIcon />
          </Button>
        </Box>
        {children}
      </Box>
    </>
  );
};

export default Filter;
