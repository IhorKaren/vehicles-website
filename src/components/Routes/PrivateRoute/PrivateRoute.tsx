import { FC } from "react";
import { useSelector } from "react-redux";
import { isLogin, isRefresh } from "../../../redux/auth";
import { Navigate } from "react-router-dom";

type RouteProps = {
  component: FC;
  redirectTo?: string;
};

export const PrivateRoute: FC<RouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn: boolean = useSelector(isLogin);
  const isRefreshing: boolean = useSelector(isRefresh);

  const shouldRedirect: boolean = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
