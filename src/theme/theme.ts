import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { customColors } from "../constants/customColors";
import { breakpointValues } from "./breakpointValues";
import { muiButtonStyles } from "./muiButtonStyles";
import { muiOutlinedInputStyles } from "./muiOutlinedInputStyles";

export const theme = createTheme({
  palette: {
    primary: {
      main: customColors.primaryColor, // Main elements
      light: "#ff762230", // Minor elements
      dark: "#ff7622",
      contrastText: "#fff",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    text: {
      primary: "#333333",
      secondary: "#193449",
      disabled: "#828282",
    },
    secondary: {
      main: "#333333", // Main Text
      light: "#888888", // Minor Color
      dark: "#1B7A04",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff7622",
      contrastText: "#fff",
    },
    info: {
      main: "#ff7622",
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F9F9F9", // Grey background
      paper: "#FFF", // White background
    },
    success: {
      main: "#1B7A04",
    },
  },
  breakpoints: { values: breakpointValues },
  typography: {
    fontFamily: ["Montserrat", "Inter", "sans-serif"].join(","),
  },
  components: {
    MuiButton: { ...muiButtonStyles },
    MuiOutlinedInput: { ...muiOutlinedInputStyles },
  },
});
