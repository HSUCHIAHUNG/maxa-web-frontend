import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useEffect } from "react";

function DefaultLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className=" flex flex-col min-h-[100vh] max-w-[1920px] m-[0_auto]">
      <Header />
      <div className="flex-1 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
