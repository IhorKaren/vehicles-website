import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { selectIsAuth, selectRoles } from "@/redux/auth/selectors";
import { AppLoader } from "@/shared";
import { ProtectedRoutePropTypes } from "./ProtectedRoute.props";

const user = { isAuth: false, roles: ["user", "chef", "admin", ""] };

const ProtectedRoute = ({ authRedirectLink, accessRedirectLink, role }) => {
  // Stores the URL of the current route. This variable is intended to redirect to the current page after login or registration.
  const location = useLocation();

  const isAuth = user.isAuth;
  const roles = user.roles;
  // const isAuth = useSelector(selectIsAuth);
  // const roles = useSelector(selectRoles);

  const isAccessByRole = roles.includes(role);

  if (!isAuth)
    return (
      <Navigate
        to={authRedirectLink}
        state={{ from: location }}
        replace={true}
      />
    );

  if (!isAccessByRole)
    return (
      <Navigate
        to={accessRedirectLink}
        state={{ from: location }}
        replace={true}
      />
    );

  return (
    <Suspense fallback={<AppLoader />}>
      <Outlet />
    </Suspense>
  );
};

ProtectedRoute.propTypes = ProtectedRoutePropTypes;

export default ProtectedRoute;
