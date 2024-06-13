import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

function DefaultLayout() {
  const { pathname } = useLocation();

  // 控制 Loading 顯示的狀態
  const [isLoading, setIsLoading] = useState(true);

  // 動態路由
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 監聽路由變化，顯示 Loading 並設定 0.3 秒後隱藏
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className=" flex flex-col min-h-[100vh] max-w-[1920px] m-[0_auto]">
      <Header />
      <div className="flex-1 ">
        <CSSTransition
          in={isLoading}
          timeout={300}
          classNames={"fade"}
          unmountOnExit={false}
        >
          <Outlet />
        </CSSTransition>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
