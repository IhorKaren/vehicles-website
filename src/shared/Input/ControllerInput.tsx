import { InputLabel, TextField } from "@mui/material";
import { Controller, Control, FieldValues, FieldErrors } from "react-hook-form";

type ControllerFormProps = {
  control: Control<FieldValues>;
  errors: FieldErrors;
  name: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
  margin?: "dense";
  autocomplete?: "on";
  variant?: "outlined";
  rules?: { required: boolean };
  type?: "text";
  inputProps?: { readOnly: boolean };
  multiline?: boolean;
  rows?: number;
};
const ControllerForm: React.FC<ControllerFormProps> = ({
  control,
  errors,
  name,
  label,
  placeholder,
  defaultValue = "",
  margin = "dense",
  autocomplete = "on",
  variant = "outlined",
  rules = { required: false },
  type = "text",
  inputProps = { readOnly: false },
  multiline = false,
  rows = 1,
}: ControllerFormProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => (
        <>
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <TextField
            id={name}
            label={placeholder}
            margin={margin}
            error={!!errors[name]}
            autoComplete={autocomplete}
            variant={variant}
            fullWidth
            type={type}
            multiline={multiline}
            rows={rows}
            InputProps={inputProps}
            {...field}
          />
        </>
      )}
    />
  );
};

export default ControllerForm;
