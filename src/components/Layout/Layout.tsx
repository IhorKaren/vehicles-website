import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "../Header/Header";
import NewHeader from "../NewHeader/NewHeader";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <Container>
      <Header />
      <NewHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </Container>
  );
};

export default Layout;
