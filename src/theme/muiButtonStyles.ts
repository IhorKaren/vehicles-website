import { lighten } from "@mui/material";

import { customColors } from "../constants/customColors";

export const muiButtonStyles = {
  styleOverrides: {
    contained: {
      color: "white",
      "&:hover": {
        backgroundColor: lighten(customColors.primaryColor, 0.1),
      },
      "&:active": {
        backgroundColor: customColors.primaryColor,
      },
      "& .MuiTouchRipple-child": {
        backgroundColor: lighten(customColors.primaryColor, 0.5),
      },
    },
  },
};
