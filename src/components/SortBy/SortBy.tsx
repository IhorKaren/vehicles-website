import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const SortBy = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
          sx={{ textTransform: "uppercase" }}
        >
          Sort By
        </InputLabel>
        <NativeSelect
          defaultValue={"Best"}
          inputProps={{
            name: "sort",
            id: "uncontrolled-native",
          }}
        >
          <option value={"best"}>Best Selling</option>
          <option value={"low"}>From Low To High</option>
          <option value={"high"}>From High To Low</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default SortBy;
