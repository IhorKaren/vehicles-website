import React from "react";
import { Controller} from "react-hook-form";

import { FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

import PropTypes from "prop-types";

import { renderOptions, renderPlaceholder } from "./utils/selectHelpers";

export const AppSelect = ({
  control,
  errors,
  name,
  label,
  options,
  margin = "dense",
  variant = "outlined",
  placeholder = "Choose an option",
  defaultValue = "",
}) => {
  const errorMessage = errors[name]?.message;

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
          {errorMessage && (
            <FormHelperText error>{errorMessage}</FormHelperText>
          )}
        </>
      )}
    />
  );
};

AppSelect.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  margin: PropTypes.oneOf(["dense", "none"]),
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};
