import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
// import { isRefresh } from "./redux/auth/selectors";
import { AppDispatch } from "./redux/store";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import MembershipChoice from "./components/MembershipChoice/MembershipChoice";
import { route } from "./constants/route";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  // const isRefreshing: boolean = useSelector(isRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path={route.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={route.SIGN_IN} element={<Login />} />
            <Route path={route.SIGN_UP} element={<Register />} />
            <Route path={route.MEMBERSHIP} element={<MembershipChoice />} />

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer autoClose={1500} closeOnClick />
    </>
  );
}

export default App;
