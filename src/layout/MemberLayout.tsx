import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import memberIcon from "@/assets/images/header/memberAvatar.svg";

const MemberCenter: React.FC = () => {
  const memberMenu = [
    { id: 1, label: "帳號管理", route: "/memberCenter" },
    { id: 2, label: "訂單管理", route: "/memberCenter/orderManagementPage" },
    { id: 3, label: "常用旅客", route: "/memberCenter/frequentTravelers" },
  ];

  const getIconClassName = (label: string) => {
    const location = useLocation();

    switch (label) {
      case "帳號管理":
        return "solar--user-bold-duotone";
      case "訂單管理":
        return "solar--clipboard-text-bold-duotone";
      case "常用旅客":
        return "solar--user-id-bold-duotone";
      default:
        return "";
    }
  };

  return (
    <>
      <div className={`max-w-[1920px]`}>
        <div className={`h-[80px] bg-[#E5E6EB] md:h-[160px]`}></div>
        <div className={`max-w-[1040px] m-[0_auto] pb-[20px] md:px-[24px] md:pt-[20px] md:pb-[52px] xl:pt-[40px] xl:pb-[92px] flex flex-col gap-[12px] md:gap-[20px] xl:flex-row xl:px-0`}>
          <div className={`h-[164px] py-[20px] bg-[#fff] border-b border-solid border-[#E5E6EB] md:border md:rounded-[16px] xl:w-[220px] xl:h-[360px] xl:gap-[20px] xl:border-none xl:p-0`}>
            <div className={`w-[188px] m-[0_auto] xl:w-full xl:border xl:border-solid xl:border-[#E5E6EB] xl:rounded-[16px] xl:px-[16px] xl:pt-[40px] xl:pb-[20px] xl:mb-[20px]`}>
              <img src={memberIcon} alt="會員大頭貼" className={`w-[64px] h-[64px] m-[0_auto]`} />
              <div className={`text-center`}>
                <p className={`mt-[8px]`}>Mia Hsu</p>
                <div className={`border border-solid border-[#E5E6EB] my-[4px]`}></div>
                <p>Mia@chanjui.com</p>
              </div>
            </div>
            <div className={`hidden flex-col gap-[4px] px-[8px] py-[4px] xl:flex xl:border xl:border-solid xl:border-[#E5E6EB] xl:rounded-[16px]`}>
              {memberMenu.map((memberRoute) => (
                <NavLink to={memberRoute.route} end key={memberRoute.route} className={({ isActive }) =>
                  [
                    "flex gap-[16px] py-[9px] px-[12px] rounded-[12px]",
                    isActive ? "bg-[#F2F3F5] text-[#3A57E8]" : null,
                  ].join(" ")
                }>
                  <span className={`icon-[${getIconClassName(memberRoute.label)}] ${location.pathname === memberRoute.route ? 'text-[#3A57E8]' : 'text-[#4E5969]'} w-[24px] h-[24px]`}></span>
                  <div>{memberRoute.label}</div>
                </NavLink>
              ))}
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MemberCenter;
