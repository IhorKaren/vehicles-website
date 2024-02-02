import { FC } from "react";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../../../redux/auth";
import { Navigate } from "react-router-dom";

type RouteProps = {
  component: FC;
  redirectTo?: string;
};

export const RestrictedRoute: FC<RouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLogged: boolean = useSelector(isLoggedIn);

  return isLogged ? <Navigate to={redirectTo} /> : <Component />;
};
