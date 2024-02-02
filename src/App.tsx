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
import Profile from "./pages/Profile/Profile";
import { ToastContainer } from "react-toastify";
import MembershipChoice from "./components/MembershipChoice/MembershipChoice";
import { route } from "./constants/route";
import { RestrictedRoute, PrivateRoute } from "./components/Routes";

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
                index
                element={
                  <PrivateRoute component={Profile} redirectTo={route.HOME} />
                }
              />
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
