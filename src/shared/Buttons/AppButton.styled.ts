import { Button, Theme } from "@mui/material";
import { styled, CSSObject } from "@mui/material/styles";
import { darken, lighten } from "@mui/material/styles";

type Variant = "contained" | "outlined" | "text";
type TextButtonStylesFunction = (theme: any) => CSSObject;

/* Set background color and hover effect for each button type */
const containedButtonStyles: TextButtonStylesFunction = (theme) => ({
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: darken(theme.palette.primary.main, 0.1),
  },
});

const outlinedButtonStyles: TextButtonStylesFunction = (theme) => ({
  color: theme.palette.primary.main,
  borderColor: lighten(theme.palette.primary.main, 0.4),
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    borderColor: lighten(theme.palette.primary.main, 0.2),
  },
});

const textButtonStyles: TextButtonStylesFunction = (theme) => ({
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
});

/* Apply common button styles and styles based on type */
export const StyledButton = styled(Button)<{ theme: Theme; variant: Variant }>(
  ({ theme, variant }) => {
    const styleMappings: { [key in Variant]: TextButtonStylesFunction } = {
      contained: containedButtonStyles,
      outlined: outlinedButtonStyles,
      text: textButtonStyles,
    };

    const selectedStyle: TextButtonStylesFunction =
      styleMappings[variant] || containedButtonStyles;

    return {
      ...selectedStyle(theme),
      height: "46px",
      minWidth: "max-content",
      fontSize: "1rem",
      lineHeight: "1.5",
      textTransform: "none",
    };
  },
);
