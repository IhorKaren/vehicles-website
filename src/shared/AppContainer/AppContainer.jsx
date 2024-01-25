import { Container } from "@mui/material";

const AppContainer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

AppContainer.propTypes = Container.propTypes;

export default AppContainer;
