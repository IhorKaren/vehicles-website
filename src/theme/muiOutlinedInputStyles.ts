import { lighten } from "@mui/material";

import { customColors } from "../constants/customColors";

export const muiOutlinedInputStyles = {
  styleOverrides: {
    root: {
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: lighten(customColors.primaryColor, 0.2),
      },
    },
    input: {
      "&:-webkit-autofill": {
        transitionDelay: "9999s",
        transitionProperty: "background-color, color",
      },
    },
    notchedOutline: {
      borderColor: customColors.outlineColor,
    },
  },
};
