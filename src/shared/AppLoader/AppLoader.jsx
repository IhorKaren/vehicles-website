import { Backdrop, CircularProgress } from "@mui/material";

const AppLoader = (props) => {
  return (
    <Backdrop {...props} open={true} style={{ zIndex: 9999 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default AppLoader;
