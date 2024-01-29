import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import MembershipChoice from "./components/MembershipChoice/MembershipChoice";
import { route } from "./constants/route";

function App() {
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     navigate(`/home`);
  //   }
  // });

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
