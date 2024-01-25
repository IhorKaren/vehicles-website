import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Используйте react-router-dom для перенаправления

import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Хук для навигации
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    handleClose();
    navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <TextField
        sx={{
          display: { xs: "none", sm: "block", md: "none", lg: "block" },
          ml: 3,
        }}
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <IconButton
        onClick={handleOpen}
        sx={{
          display: { xs: "block", sm: "none", md: "block", lg: "none" },
          ml: 4,
        }}
      >
        <SearchIcon />
      </IconButton>
      <Dialog fullScreen={isXsScreen} open={open} onClose={handleClose}>
        <Box
          style={{ padding: "20px", display: "flex", flexDirection: "column" }}
        >
          <TextField
            multiline
            autoFocus
            fullWidth
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Seach... (ex. 'audi r8')"
            margin="dense"
          />
          <Button onClick={handleSearch} color="primary" variant="contained">
            Let`s go
          </Button>
        </Box>
      </Dialog>
    </>
  );
};
