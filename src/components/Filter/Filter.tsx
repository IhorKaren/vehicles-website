import { FC, ReactNode } from "react";
import { Box, Typography } from "@mui/material";

type FilterProps = {
  children: ReactNode;
};

const Filter: FC<FilterProps> = ({ children }) => {
  return (
    <>
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
            width: "60%",
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
    </>
  );
};

export default Filter;
