import { FC, ReactNode } from "react";
import { Box, Typography } from "@mui/material";

type FilterProps = {
  children: ReactNode;
};

const Filter: FC<FilterProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        py: "20px",
        maxWidth: "240px",
      }}
    >
      <Typography
        variant="h6"
        textTransform="uppercase"
        sx={{
          position: "relative",
          mb: 2,
          "::before": {
            content: '""',
            position: "absolute",
            bottom: "50%",
            right: "0",
            width: "65%",
            height: "2px",
            backgroundColor: "#000",
          },
        }}
      >
        Filter
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Filter;
