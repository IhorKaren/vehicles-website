import { Controller, Control, FieldErrors, FieldValues } from "react-hook-form";
import { InputLabel, Select } from "@mui/material";
import { renderOptions, renderPlaceholder } from "./utils/selectHelpers";

interface AppSelectProps {
  control: Control<FieldValues>;
  errors: FieldErrors;
  name: string;
  label: string;
  options: { label: string; value: string }[];
  margin?: "dense" | "none" | undefined;
  variant?: "standard" | "outlined" | "filled";
  placeholder?: string;
  defaultValue?: string;
}
export const AppSelect: React.FC<AppSelectProps> = ({
  control,
  name,
  label,
  options,
  margin = "dense",
  variant = "outlined",
  placeholder = "Choose an option",
  defaultValue = "",
}: AppSelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <InputLabel
            id={`${name}-label`}
            sx={{ marginBottom: "8px", paddingTop: "8px" }}
          >
            {label}
          </InputLabel>
          <Select
            labelId={`${name}-label`}
            id={`${name}-select`}
            error={false}
            fullWidth
            margin={margin}
            variant={variant}
            defaultValue={defaultValue}
            MenuProps={{
              autoFocus: false,
            }}
            {...field}
          >
            {placeholder && renderPlaceholder(placeholder)}
            {renderOptions(options)}
          </Select>
        </>
      )}
    />
  );
};
