import { FC } from "react";
// import { useSelector } from "react-redux";
// import { isLogin } from "Redux/Selectors/selectors";
import { Navigate } from "react-router-dom";

type RouteProps = {
  component: FC;
  redirectTo?: string;
};

const RestrictedRoute: FC<RouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn = true;

  //   const isLoggedIn: boolean = useSelector(isLogin);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
