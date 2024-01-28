import { Container } from "@mui/material";
type AppContainerProps = {
  children: React.ReactNode;
};
const AppContainer: React.FC<AppContainerProps> = ({
  children,
  ...props
}: AppContainerProps) => {
  return <Container {...props}>{children}</Container>;
};

export default AppContainer;
