import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import { customColors } from "../constants";
import { muiAdditionalStyles } from "./muiAdditionalStyles";
import { muiButtonStyles } from "./muiButtonStyles";
import { muiOutlinedInputStyles } from "./muiOutlinedInputStyles";

export const theme = createTheme({
  palette: {
    primary: {
      main: customColors.primaryColor, // Main elements
      light: "#ff762230", // Minor elements
      superLight: "#FFF",
    },
    secondary: {
      main: "#333333", // Main Text
      light: "#888888", // Minor Color
    },
    error: {
      main: red.A400,
    },
    new: {
      main: "#e0e0e0",
    },
    background: {
      default: "#F9F9F9", // Grey background
      paper: "#FFF", // White background
    },
    text: {
      primary: "#333333", // Main Text
      secondary: "#888888", // Minor Text
    },
    outline: {
      main: customColors.outlineColor, // Outline
    },
    success: {
      main: "#1B7A04",
    },
    pending: {
      main: "#B0BEC5", //Chip
    },
    ...muiAdditionalStyles,
  },
  typography: {
    fontFamily: ["Montserrat", "Inter", "sans-serif"].join(","),
  },
  components: {
    MuiButton: { ...muiButtonStyles },
    MuiOutlinedInput: { ...muiOutlinedInputStyles },
  },
});
