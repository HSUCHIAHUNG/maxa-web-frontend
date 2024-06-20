import React, { useEffect, useState } from "react";
import { useLocation, NavLink, Outlet } from "react-router-dom";
// 匯入圖片
import memberIcon from "@/assets/images/header/memberAvatar.svg";
import bannerImg from "../assets/images/memberCenter/member-Center.png";
// 匯入組件
import Banner from "../components/common/Banner";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// Loading
import { CSSTransition } from "react-transition-group";

const MemberCenter: React.FC = () => {
  // 當前路由方法
  const location = useLocation();

  // 控制 Loading 顯示的狀態
  const [isLoading, setIsLoading] = useState(true);



  // 監聽路由變化，顯示 Loading 並設定 0.3 秒後隱藏
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  
  return (
    <>
      <Header />
      <div className={`max-w-[1920px]`}>
        <Banner url={bannerImg} text={["會", "員", "中", "心"]}></Banner>

        <div
          className={`max-w-[1040px] m-[0_auto] pb-[20px] md:px-[24px] md:pt-[20px] md:pb-[52px] xl:pt-[40px] xl:pb-[92px] flex flex-col gap-[12px] md:gap-[20px] xl:flex-row xl:px-0`}
        >
          <div
            className={`h-[164px] py-[20px] bg-[#fff] border-b border-solid border-[#E5E6EB] md:border md:rounded-[16px] xl:w-[220px] xl:h-[360px] xl:gap-[20px] xl:border-none xl:p-0`}
          >
            <div
              className={`w-[188px] m-[0_auto] xl:w-full xl:border xl:border-solid xl:border-[#E5E6EB] xl:rounded-[16px] xl:px-[16px] xl:pt-[40px] xl:pb-[20px] xl:mb-[20px]`}
            >
              <img
                src={memberIcon}
                alt="會員大頭貼"
                className={`w-[64px] h-[64px] m-[0_auto]`}
              />
              <div className={`text-center`}>
                <p className={`mt-[8px]`}>Mia Hsu</p>
                <div
                  className={`border border-solid border-[#E5E6EB] my-[4px]`}
                ></div>
                <p>Mia@chanjui.com</p>
              </div>
            </div>
            <div
              className={`hidden flex-col gap-[4px] px-[8px] py-[4px] xl:flex xl:border xl:border-solid xl:border-[#E5E6EB] xl:rounded-[16px]`}
            >
              {/* 帳號管理 */}
              <NavLink
                to={"/memberCenter"}
                end
                className={({ isActive }) =>
                  [
                    "flex gap-[16px] py-[9px] px-[12px] rounded-[12px]",
                    isActive ? "bg-[#F2F3F5] text-[#3A57E8]" : null,
                  ].join(" ")
                }
              >
                <span
                  className={`icon-[solar--user-bold-duotone] ${
                    location.pathname === "/memberCenter"
                      ? "text-[#3A57E8]"
                      : "text-[#4E5969]"
                  } w-[24px] h-[24px]`}
                ></span>
                <div>帳號管理</div>
              </NavLink>

              {/* 訂單管理 */}
              <NavLink
                to={"/memberCenter/orderManagementPage"}
                className={({ isActive }) =>
                  [
                    "flex gap-[16px] py-[9px] px-[12px] rounded-[12px]",
                    isActive ? "bg-[#F2F3F5] text-[#3A57E8]" : null,
                  ].join(" ")
                }
              >
                <span
                  className={`icon-[solar--clipboard-text-bold-duotone] ${
                    location.pathname === "/memberCenter/orderManagementPage"
                      ? "text-[#3A57E8]"
                      : "text-[#4E5969]"
                  } w-[24px] h-[24px]`}
                ></span>
                <div>訂單管理</div>
              </NavLink>

              {/* 常用旅客 */}
              <NavLink
                to={"/memberCenter/frequentTravelers"}
                className={({ isActive }) =>
                  [
                    "flex gap-[16px] py-[9px] px-[12px] rounded-[12px]",
                    isActive ? "bg-[#F2F3F5] text-[#3A57E8]" : null,
                  ].join(" ")
                }
              >
                <span
                  className={`icon-[solar--user-id-bold-duotone] ${
                    location.pathname === "/memberCenter/frequentTravelers"
                      ? "text-[#3A57E8]"
                      : "text-[#4E5969]"
                  } w-[24px] h-[24px]`}
                ></span>
                <div>常用旅客</div>
              </NavLink>
            </div>
          </div>
          <CSSTransition
            in={isLoading}
            timeout={300}
            classNames={"fade"}
            unmountOnExit={false}
          >
            <Outlet />
          </CSSTransition>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemberCenter;
