import { Backdrop, CircularProgress, BackdropProps } from "@mui/material";

type AppLoaderProps = BackdropProps;

const AppLoader: React.FC<AppLoaderProps> = (props) => {
  return (
    <Backdrop {...props} open={true} style={{ zIndex: 9999 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default AppLoader;
