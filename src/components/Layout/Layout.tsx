import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <div>Layout</div>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
