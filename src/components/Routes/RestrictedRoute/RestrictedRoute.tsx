import { FC } from "react";
import { useSelector } from "react-redux";
import { isLogin } from "../../../redux/auth";
import { Navigate } from "react-router-dom";

type RouteProps = {
  component: FC;
  redirectTo?: string;
};

export const RestrictedRoute: FC<RouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn: boolean = useSelector(isLogin);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
