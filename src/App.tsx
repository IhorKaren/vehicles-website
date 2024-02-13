import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { refreshUser, isRefresh } from "./redux/auth";
import { AppDispatch } from "./redux/store";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Vehicles from "./pages/Vehicles/Vehicles";
import Accessories from "./pages/Accessories/Accessories";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import AccountSettings from "./pages/AccountSettings/AccountSettings";
import MyListings from "./pages/MyListings/MyListings";
import Notifications from "./pages/Notifications/Notifications";
import Listing from "./pages/Listing/Listing";
import { ToastContainer } from "react-toastify";
import MembershipChoice from "./components/MembershipChoice/MembershipChoice";
import { route } from "./constants/route";
import { RestrictedRoute, PrivateRoute } from "./components/Routes";
import { VehicleInfo } from "./pages/VehicleInfo/VehicleInfo";
import { AccessoryInfo } from "./pages/AccessoryInfo/AccessoryInfo";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const isRefreshing: boolean = useSelector(isRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={null}>
        {!isRefreshing && (
          <Routes>
            <Route path={route.HOME} element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path={route.SIGN_IN}
                element={<RestrictedRoute component={Login} />}
              />
              <Route
                path={route.SIGN_UP}
                element={<RestrictedRoute component={Register} />}
              />
              <Route
                path={route.USER_ACCOUNT}
                element={
                  <PrivateRoute component={Profile} redirectTo={route.HOME} />
                }
              >
                <Route index element={<Dashboard />} />
                <Route
                  path={route.ACCOUNT_SETTINGS}
                  element={<AccountSettings />}
                />
                <Route path={route.MEMBERSHIP} element={<MyListings />} />
                <Route path={route.NOTIFICATIONS} element={<Notifications />} />
              </Route>
              <Route path={route.VEHICLES} element={<Vehicles />} />
              <Route path={`${route.VEHICLES}/:id`} element={<VehicleInfo />} />
              <Route path={`${route.ACCESSORIES}/:id`} element={<AccessoryInfo />} />

              <Route path={route.ACCESSORIES} element={<Accessories />} />
              <Route path={route.SELL} element={<Listing />} />
              <Route path={route.MEMBERSHIP} element={<MembershipChoice />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        )}
      </Suspense>
      <ToastContainer autoClose={1500} closeOnClick />
    </>
  );
}

export default App;
