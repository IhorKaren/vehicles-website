import { FC } from "react";
// import { useSelector } from "react-redux";
// import { isLogin, isRefresh } from "Redux/Selectors/selectors";
import { Navigate } from "react-router-dom";

type RouteProps = {
  component: FC;
  redirectTo?: string;
};

const PrivateRoute: FC<RouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  //   const isLoggedIn: boolean = useSelector(isLogin);
  //   const isRefreshing: boolean = useSelector(isRefresh);

  //   const shouldRedirect: boolean = !isLoggedIn && !isRefreshing;

  const shouldRedirect = true;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
