// react原生方法
import React from "react";
import { Outlet } from "react-router-dom";
// 圖片
import memberIcon from "@/assets/images/header/memberAvatar.svg";


const MemberCenter: React.FC = () => {
  return (
    <>
      <div className={`max-w-[1920px] `}>
        {/* banner */}
        <div className={` h-[80px] bg-[#E5E6EB] md:h-[160px] `}></div>
        {/* nav & 內容 */}
        <div
          className={`max-w-[1040px] m-[0_auto] pb-[20px] md:px-[24px] md:pt-[20px] md:pb-[52px] xl:pt-[40px] xl:pb-[92px] flex flex-col gap-[12px]  md:gap-[20px] xl:flex-row xl:px-0 `}
        >
          {/* 會員照片 & nav */}
          <div
            className={` h-[164px] py-[20px] bg-[#fff] border-b border-solid border-[#E5E6EB] md:border md:rounded-[16px] xl:w-[220px] xl:h-[360px] xl:gap-[20px] xl:border-none xl:p-0 `}
          >
            {/* 會員照片 */}
            <div
              className={`w-[188px] m-[0_auto] xl:w-full xl:border xl:border-solid xl:border-[#E5E6EB] xl:rounded-[16px] xl:px-[16px] xl:pt-[40px] xl:pb-[20px] xl:mb-[20px] `}
            >
              <img
                src={memberIcon}
                alt="會員大頭貼"
                className={`w-[64px] h-[64px] m-[0_auto]`}
              />
              <div className={`text-center`}>
                <p className={`mt-[8px]`}>Mia Hsu</p>
                <div
                  className={`border border-solid border-[#E5E6EB] my-[4px] `}
                ></div>
                <p>Mia@chanjui.com</p>
              </div>
            </div>
            {/* Nav */}
            <div
              className={`hidden xl:flex flex-col gap-[4px] px-[8px] py-[4px] xl:block xl:border xl:border-solid xl:border-[#E5E6EB] xl:rounded-[16px] `}
            >
              {/* 帳號管理 */}
              <div
                className={`flex gap-[16px] py-[9px] px-[12px] rounded-[12px] bg-[#F2F3F5]`}
              >
                <span
                  className={`icon-[solar--user-bold-duotone] w-[24px] h-[24px] text-[#4E5969]`}
                ></span>
                <div>帳號管理</div>
              </div>
              {/* 訂單管理 */}
              <div
                className={`flex gap-[16px] py-[9px] px-[12px] rounded-[12px] bg-[#F2F3F5]`}
              >
                <span
                  className={`icon-[solar--clipboard-text-bold-duotone] w-[24px] h-[24px] text-[#4E5969]`}
                ></span>
                <div>訂單管理</div>
              </div>
              {/* 常用旅客 */}
              <div
                className={`flex gap-[16px] py-[9px] px-[12px] rounded-[12px] bg-[#F2F3F5]`}
              >
                <span
                  className={`icon-[solar--user-id-bold-duotone] w-[24px] h-[24px] text-[#4E5969]`}
                ></span>
                <div>常用旅客</div>
              </div>
            </div>
          </div>
          <Outlet /> 

          
        </div>
      </div>
    </>
  );
};

export default MemberCenter;
