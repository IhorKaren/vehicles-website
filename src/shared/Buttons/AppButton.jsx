import { PropTypes } from "prop-types";

import { useTheme } from "@emotion/react";
import { StyledButton } from "./AppButton.styled";

const AppButton = ({ variant, label, ...props }) => {
  const theme = useTheme();

  return (
    <StyledButton theme={theme} variant={variant} {...props}>
      {label}
    </StyledButton>
  );
};

AppButton.propTypes = {
  variant: PropTypes.oneOf(["contained", "text", "outlined"]),
  label: PropTypes.node,
  props: PropTypes.object,
};

AppButton.defaultProps = {
  variant: "contained",
  label: "Submit",
};

export default AppButton;
