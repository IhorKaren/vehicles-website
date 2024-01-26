import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Container
            sx={{
              maxWidth: "1280px",
              margin: "0 auto",
              pl: "14px",
              pr: "14px",
            }}
          >
            <Outlet />
          </Container>
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
