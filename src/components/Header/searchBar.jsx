import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

function SearchBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleMouseEnter = () => {
    setIsSearchVisible(true);
  };

  const handleMouseLeave = () => {
    !searchTerm ? setIsSearchVisible(false) : setIsSearchVisible(true);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
    // Додайте вашу логіку для обробки пошуку
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {!isSearchVisible ? (
        <IconButton size="small">
          <FaSearch />
        </IconButton>
      ) : (
        <InputBase
          style={{
            boxShadow: "1px",
          }}
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      )}
    </div>
  );
}

export default SearchBar;
