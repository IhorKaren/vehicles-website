import { InputLabel, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Controller, Control, FieldErrors, FieldError } from "react-hook-form";

const ControllerForm = ({
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
  helperText = "",
  inputProps = { readOnly: false },
  multiline = false,
  rows = 1,
}) => {
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
            helperText={errors[name] ? errors[name]?.message : helperText}
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

ControllerForm.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  margin: PropTypes.oneOf(["dense", "none", "normal"]),
  autocomplete: PropTypes.oneOf([
    "on",
    "off",
    "username",
    "current-password",
    "email",
  ]),
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  rules: PropTypes.shape({
    required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    pattern: PropTypes.shape({
      value: PropTypes.instanceOf(RegExp),
      message: PropTypes.string,
    }),
    minLength: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
  }),
  type: PropTypes.oneOf(["text", "password", "number"]),
  helperText: PropTypes.string,
  inputProps: PropTypes.shape({
    readOnly: PropTypes.bool,
  }),
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

export default ControllerForm;
