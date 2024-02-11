import { useTheme } from "@emotion/react";
import { StyledButton } from "./AppButton.styled";

type AppButtonProps = {
  variant: "contained" | "text" | "outlined";
  label: string;
  sx?: React.CSSProperties;
  disabled?: boolean;
};

const AppButton: React.FC<AppButtonProps> = ({
  variant = "contained",
  label = "Submit",
  disabled = false,
  sx = {},
}: AppButtonProps) => {
  const theme: any = useTheme();

  return (
    <StyledButton
      theme={theme}
      variant={variant}
      disabled={disabled}
      sx={{ ...sx }}
    >
      {label}
    </StyledButton>
  );
};

export default AppButton;
