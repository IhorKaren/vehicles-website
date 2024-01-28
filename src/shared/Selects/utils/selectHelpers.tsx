import { MenuItem } from "@mui/material";
import { StyledMenuItem } from "../AppSelect.styles";

export const renderPlaceholder = (placeholder) => {
  return (
    <MenuItem value="" disabled style={{ backgroundColor: "transparent" }}>
      {placeholder}
    </MenuItem>
  );
};

export const renderOptions = (options) => {
  return options.map((option) => {
    const { code, name } = option;
    return (
      <StyledMenuItem key={code} value={code}>
        {name}
      </StyledMenuItem>
    );
  });
};
