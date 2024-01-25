import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// import { Footer } from "@/components/Footer/Footer";
// import { Footer } from '@/components/Footer/Footer';
import Header from "@/components/Header/Header";
import {  AppLoader } from "@/shared";
import { Main } from "@/shared/Main/Main";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Main>
            <AppLoader />
          </Main>
        }
      >
        <Outlet />
      </Suspense>

      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;
