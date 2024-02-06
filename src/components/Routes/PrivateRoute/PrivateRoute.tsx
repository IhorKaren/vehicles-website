import { FC } from "react";
import { useSelector } from "react-redux";
import { isLoggedIn, isRefresh } from "../../../redux/auth";
import { Navigate } from "react-router-dom";

type RouteProps = {
  component: FC;
  redirectTo?: string;
};

export const PrivateRoute: FC<RouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLogged: boolean = useSelector(isLoggedIn);
  const isRefreshing: boolean = useSelector(isRefresh);

  const shouldRedirect: boolean = !isLogged && isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
