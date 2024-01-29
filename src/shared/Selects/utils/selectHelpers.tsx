import { MenuItem } from "@mui/material";
import { StyledMenuItem } from "../AppSelect.styles";

type Option = {
  code: string;
  name: string;
};

type RenderPlaceholderProps = {
  placeholder: string;
};

export const renderPlaceholder = ({ placeholder }: RenderPlaceholderProps) => {
  return (
    <MenuItem value="" disabled style={{ backgroundColor: "transparent" }}>
      {placeholder}
    </MenuItem>
  );
};

type RenderOptionsProps = {
  options: Option[];
};

export const renderOptions = ({ options }: RenderOptionsProps) => {
  return options.map((option) => {
    const { code, name } = option;
    return (
      <StyledMenuItem key={code} value={code}>
        {name}
      </StyledMenuItem>
    );
  });
};
