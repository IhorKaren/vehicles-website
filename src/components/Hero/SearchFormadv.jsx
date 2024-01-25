import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Collapse,
  Typography,
} from "@mui/material";
import { data } from "./data";
import { AppButton } from "@/shared";

export const SearchFormadv = ({ item }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const [isAdvancedModeActive, setIsAdvancedModeActive] = useState(false);

  const toggleAdvancedMode = () => {
    setIsAdvancedModeActive(!isAdvancedModeActive);
  };
  return (
    <Container component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Box sx={{ my: 2 }}>
        {item.fields.map((field, index) => (
          <FormControl key={index} fullWidth margin="normal">
            <InputLabel id={`select-label-${index}`}>{field.label}</InputLabel>
            <Controller
              name={field.label}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  labelId={`select-label-${index}`}
                  label={field.label}
                  value={value}
                  onChange={onChange}
                  placeholder={field.placeholder}
                >
                  {field.items.map((item, itemIndex) => (
                    <MenuItem key={itemIndex} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        ))}
      </Box>
      <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap"  }}>
        <Typography>Found 
          <span style={{ fontWeight: "bold", margin: "0 5px", color: "orange" }}> 3290</span>
          advertisements.</Typography>
        <Controller
          name="isAdvancedModeActive"
          control={control}
          render={({ field }) => (
            <Button
              {...field}
              variant="outlined"
              color="secondary"
              onClick={toggleAdvancedMode}
              type="button"
              
            >
              {isAdvancedModeActive ? "Hide" : "Advanced"}
            </Button>
          )}
        />
      </Box>
      <Collapse in={isAdvancedModeActive}>
        <Box>
          {/* Example of an advanced field */}
          <TextField
            label="Advanced Field"
            variant="outlined"
            fullWidth
            margin="normal"
          />
                    <TextField
            label="Advanced Field"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Box>
      </Collapse>
      <Button type="submit" fullWidth variant="outlined">Search
        </Button>
 
    </Container>
  );
};
