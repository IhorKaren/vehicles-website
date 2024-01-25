import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import AppLayout from "@/components/layouts/AppLayout";
import { route } from "@/constants";
import { role } from "@/constants/role";
import ProtectedRoute from "@/pages/access/ProtectedRoute";
import RestrictedRoute from "@/pages/access/RestrictedRoute";
// import AdminCouriersPage from '@/pages/admin/AdminCouriers/AdminCouriersPage';

const FavoriteDishes = lazy(
  () => import("@/pages/user/FavoriteDishes/FavoriteDishes"),
);
const FavoriteChefs = lazy(
  () => import("@/pages/user/FavoriteChefs/FavoriteChefs"),
);
const SignInPage = lazy(() => import("@/pages/auth/SignIn"));
const SignUpPage = lazy(() => import("@/pages/auth/SignUp"));
const HomePage = lazy(() => import("@/pages/user/Home/HomePage"));
const DishesPage = lazy(() => import("@/pages/user/Dishes"));
const DishReviews = lazy(() => import("@/pages/user/DishReviews"));
const CreateOrderPage = lazy(() => import("@/pages/user/CreateOrder"));
const UserOrdersPage = lazy(() => import("@/pages/user/UserOrders"));
const OrderPaymentPage = lazy(() => import("@/pages/user/OrderPayment"));
const UserAccountPage = lazy(() => import("@/pages/user/UserAccount"));
const ChefsPage = lazy(() => import("@/pages/user/Chefs"));
const ChefInfoPage = lazy(() => import("@/pages/user/ChefInfo"));

const NotFoundPage = lazy(() => import("@/pages/NotFound"));
const AccessDeniedPage = lazy(() => import("@/pages/access/AccessDenied"));
const NotificationsPage = lazy(
  () => import("@/pages/notifications/NotificationsPage"),
);

const AppRouter = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<AppLayout />}>
        <Route index element={<HomePage />} />

        <Route
          path={route.HOME}
          element={<RestrictedRoute redirectLink={route.HOME} />}
        >
          <Route path={route.SIGN_IN} element={<SignInPage />} />
          <Route path={route.SIGN_UP} element={<SignUpPage />} />
        </Route>

        <Route
          path={route.OWNER_SIGN_UP}
          element={
            <RestrictedRoute redirectLink={route.OWNER_ACCOUNT} role="owner" />
          }
        ></Route>

        <Route
          path={route.COURIER_SIGN_UP}
          element={
            <RestrictedRoute
              redirectLink={route.COURIER_ACCOUNT}
              role="courier"
            />
          }
        ></Route>

        <Route
          path={route.USER_ACCOUNT}
          element={
            <ProtectedRoute
              authRedirectLink={route.SIGN_IN}
              accessRedirectLink={route.SIGN_IN}
              role={role.USER}
            />
          }
        >
          <Route index element={<UserAccountPage />} />
        </Route>

        <Route path={route.DISHES}>
          <Route index element={<DishesPage />} />
          <Route path=":dishId/reviews" element={<DishReviews />} />

          <Route
            path="favorites"
            element={
              <ProtectedRoute
                authRedirectLink={route.SIGN_IN}
                accessRedirectLink={route.SIGN_IN}
                role={"user"}
              />
            }
          >
            <Route index element={<FavoriteDishes />} />
          </Route>
        </Route>

        <Route path={route.OWNERS}>
          <Route index element={<ChefsPage />} />
          <Route path=":ownerId" element={<ChefInfoPage />} />

          <Route
            path="favorites"
            element={
              <ProtectedRoute
                authRedirectLink={route.SIGN_IN}
                accessRedirectLink={route.SIGN_IN}
                role={"user"}
              />
            }
          >
            <Route index element={<FavoriteChefs />} />
          </Route>
        </Route>

        <Route
          path={route.HOME}
          element={
            <ProtectedRoute
              authRedirectLink={route.SIGN_IN}
              accessRedirectLink={route.SIGN_IN}
              role={"user"}
            />
          }
        >
          <Route path={route.USER_ORDERS} element={<UserOrdersPage />} />
          <Route path={route.CREATE_ORDER} element={<CreateOrderPage />} />
          <Route
            path={`${route.ORDERS_PAYMENT}/:orderId`}
            element={<OrderPaymentPage />}
          />
        </Route>

        <Route
          path={route.CHEF_ACCOUNT}
          element={
            <ProtectedRoute
              authRedirectLink={route.SIGN_IN}
              accessRedirectLink={route.OWNER_SIGN_UP}
              role={"chef"}
            />
          }
        >
          <Route path={route.OWNER_DISHES}></Route>
        </Route>

        <Route
          path={route.COURIER_ACCOUNT}
          element={
            <ProtectedRoute
              authRedirectLink={route.SIGN_IN}
              accessRedirectLink={route.COURIER_SIGN_UP}
              role={"courier"}
            />
          }
        ></Route>

        <Route
          path={route.ADMIN}
          element={
            <ProtectedRoute
              authRedirectLink={route.SIGN_IN}
              accessRedirectLink={route.ACCESS_DENIED}
              role={"admin"}
            />
          }
        ></Route>

        <Route
          path={route.NOTIFICATIONS}
          element={
            <ProtectedRoute
              authRedirectLink={route.SIGN_IN}
              accessRedirectLink={route.SIGN_IN}
              role={role.USER}
            />
          }
        >
          <Route index element={<NotificationsPage />} />
        </Route>

        <Route path={route.ACCESS_DENIED} element={<AccessDeniedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
