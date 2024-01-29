import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";

const SearchFormBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
}));

export const SearchForm = () => {
  const theme = useTheme();
  // State for form controls
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [stockOnly, setStockOnly] = useState(false);

  const handleMakeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setMake(event.target.value);
  };
  const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setModel(event.target.value);
  const handleFuelTypeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFuelType(event.target.value);
  const handleTransmissionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => setTransmission(event.target.value);
  const handleMileageChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMileage(event.target.value);
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(event.target.value);
  const handleStockOnlyChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setStockOnly(event.target.checked);
  return (
    <SearchFormBox theme={theme}>
      {/* Selection for Make */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Make</InputLabel>
        <Select value={make} onChange={() => handleMakeChange} label="Make">
          {/* Replace with actual options */}
          <MenuItem value="ford">Ford</MenuItem>
          <MenuItem value="toyota">Toyota</MenuItem>
          {/* ... other options ... */}
        </Select>
      </FormControl>
      {/* Selection for Model */}
      <FormControl fullWidth margin="normal" disabled={!make}>
        <InputLabel>Model</InputLabel>
        <Select
          value={model}
          onChange={() => handleModelChange}
          label="Model"
          disabled={!make}
        >
          {/* Replace with actual options */}
          <MenuItem value="mustang">Mustang</MenuItem>
          <MenuItem value="corolla">Corolla</MenuItem>
          {/* ... other options ... */}
        </Select>
      </FormControl>
      {/* Selection for Fuel Type */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Fuel type</InputLabel>
        <Select
          value={fuelType}
          onChange={() => handleFuelTypeChange}
          label="Fuel type"
        >
          {/* Replace with actual options */}
          <MenuItem value="petrol">Petrol</MenuItem>
          <MenuItem value="diesel">Diesel</MenuItem>
          {/* ... other options ... */}
        </Select>
      </FormControl>
      {/* Selection for Transmission */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Transmission</InputLabel>
        <Select
          value={transmission}
          onChange={() => handleTransmissionChange}
          label="Transmission"
        >
          {/* Replace with actual options */}
          <MenuItem value="automatic">Automatic</MenuItem>
          <MenuItem value="manual">Manual</MenuItem>
          {/* ... other options ... */}
        </Select>
      </FormControl>
      {/* Selection for Mileage */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Mileage</InputLabel>
        <Select
          value={mileage}
          onChange={() => handleMileageChange}
          label="Mileage"
        >
          {/* Replace with actual options */}
          <MenuItem value="0-10000">0-10,000</MenuItem>
          <MenuItem value="10001-50000">10,001-50,000</MenuItem>
          {/* ... other options ... */}
        </Select>
      </FormControl>
      {/* Selection for Price */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Price</InputLabel>
        <Select value={price} onChange={() => handlePriceChange} label="Price">
          {/* Replace with actual options */}
          <MenuItem value="0-10000">$0 - $10,000</MenuItem>
          <MenuItem value="10001-50000">$10,001 - $50,000</MenuItem>
          {/* ... other options ... */}
        </Select>
      </FormControl>
      {/* Checkbox for 24/7 stock only */}
      <FormControlLabel
        control={
          <Checkbox
            checked={stockOnly}
            onChange={() => handleStockOnlyChange}
          />
        }
        label="24/7 stock only"
      />
      {/* Search Button */}
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Show vehicles
      </Button>
      {/* Advanced Search Button */}
      <Button variant="outlined" color="primary" fullWidth sx={{ mt: 2 }}>
        Advanced search
      </Button>
    </SearchFormBox>
  );
};
