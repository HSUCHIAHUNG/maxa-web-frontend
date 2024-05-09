// 原生方法
import React, { useState } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { Input } from "@arco-design/web-react";
// css樣式
import "../../assets/Guest.css";
// Icon
import headerText from "@/assets/images/header/header_text.svg";
import memberIcon from "@/assets/images/header/memberAvatar.svg";
// redux
import { useSelector } from "react-redux";
import { authActions } from "../../stores/auth.ts";
import { useAppDispatch, RootState } from "../../stores/index.ts";

// 選單開關狀態型別
interface IsOpenType {
  search: boolean;
  list: boolean;
  memberList: boolean;
  langue: boolean;
  cart: boolean;
}

const Header: React.FC = () => {
  // redux方法呼叫
  const dispatch = useAppDispatch();

  /** @func 全域狀態auth */
  const auth = useSelector((state: RootState) => state.auth.isMember);

  /** @func 當前路由方法 */
  const location = useLocation();

  /** @func 動態切換路由 */
  const navigate = useNavigate();

  /** @const {string} 當前路由path */
  const currentPathName = location.pathname;

  // ui ki( 搜尋框 )
  const InputSearch = Input.Search;

  // 開啟登入註冊選單
  const setGuestIsOpen = () => {
    setOpen((prevState) => ({
      ...prevState,
      search: false,
      list: false,
      memberList: false,
      langue: false,
      cart: false,
    }));
    dispatch(authActions.dialogToggle());
  };

  // 關閉所有選單
  const setCloseList = () => {
    setOpen((prevState) => ({
      ...prevState,
      search: false,
      list: false,
      memberList: false,
      langue: false,
      cart: false,
    }));
  };

  // 選單開關狀態控制
  const [isOpen, setOpen] = useState<IsOpenType>({
    search: false,
    list: false,
    memberList: false,
    langue: false,
    cart: false,
  });
  const { search, list, memberList } = isOpen;

  /** @const {Array} 未登入routes */
  const menuList = [
    { id: "1", lable: "購物車", route: "/cart" },
    { id: "2", lable: "訂單查詢", route: "/searchOrder" },
  ];

  /** @const {Array} 會員登入routes */
  const memberMenu = [
    { id: 1, lable: "帳號管理", route: "/memberCenter" },
    { id: 2, lable: "訂單管理", route: "/memberCenter/frequentTravelers" },
    { id: 3, lable: "常用旅客", route: "/memberCenter/orderManagementPage" },
    { id: 4, lable: "登出", route: "memberCenter/logout" },
  ];

  /** @func 會員選單icon動態顯示icon */
  const getIconClassName = (lable: string) => {
    switch (lable) {
      case "帳號管理":
        return "solar--cart-large-minimalistic-bold-duotone";
      case "訂單管理":
        return "solar--clipboard-text-bold-duotone";
      case "常用旅客":
        return "solar--user-id-bold-duotone";
      case "登出":
        return "solar--logout-3-bold-duotone";
      case "購物車":
        return "solar--cart-large-minimalistic-bold-duotone";
      case "訂單查詢":
        return "solar--cart-large-minimalistic-bold-duotone";
      default:
        return "";
    }
  };

  /** @func 選單開關狀態控制方法 */
  const toggleOpen = (key: keyof IsOpenType) => {
    if (isOpen.memberList && key !== "memberList") toggleOpen("memberList");
    if (isOpen.list && key !== "list") toggleOpen("list");
    if (isOpen.cart && key !== "cart") toggleOpen("cart");
    if (isOpen.langue && key !== "langue") toggleOpen("langue");
    if (isOpen.search && key !== "search") toggleOpen("search");

    setOpen((prev: IsOpenType) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  /** @func 搜尋商品 */
  const searchProduct = (value: string) => {
    console.log(value);
    navigate("order");
  };

  return (
    <>
      <section className="relative bg-[#fff] w-[100%] h-[56px] py-[14px] px-[12px] md:pl-[20px] md:pr-[32px] flex justify-between items-center shadow-md">
        {/* 左邊maxa logo */}
        <div className={`flex gap-[4px] items-center ${search && "hidden"}`}>
          {/* logo回首頁 */}
          <NavLink to={"/"} className={`flex items-center`}>
            <span className="icon-[solar--box-minimalistic-bold-duotone] w-[24px] h-[24px] text-[#4E5969]"></span>
            <img src={headerText} alt="MAXA" className="w-[66px] h-[14px]" />
          </NavLink>
          {/* 電腦版搜尋行程 */}
          <InputSearch
            onSearch={searchProduct}
            className={` w-[265px] h-[32px] hidden md:block `}
            placeholder="搜尋行程"
            // loading
            searchButton
          />
        </div>

        {/* 電腦版選單 */}
        <div className={`flex gap-[24px] ${search && "hidden"} hidden md:flex`}>
          {/* 查詢訂單 */}
          <div
            onClick={() => toggleOpen("cart")}
            className={`group hidden md:block`}
          >
            <NavLink
              to={"/searchOrder"}
              className={({ isActive }) =>
                [
                  `icon-[solar--clipboard-text-bold-duotone] w-[24px] h-[24px] cursor-pointer hidden md:block group-hover:text-[#3A57E8] `,
                  isActive ? "text-[#3A57E8]" : "text-[#4E5969]",
                ].join(" ")
              }
            ></NavLink>
            <div
              className={`absolute w-[24px] h-[5px] bg-[#3A57E8] bottom-[0px] group-hover:block  ${
                currentPathName === "/searchOrder" ? "block" : "hidden"
              }`}
            ></div>
          </div>
          {/* 購物車 */}
          <div
            onClick={() => toggleOpen("cart")}
            className={`group hidden md:block`}
          >
            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                [
                  `icon-[solar--cart-large-minimalistic-bold-duotone] w-[24px] h-[24px] cursor-pointer group-hover:text-[#3A57E8]`,
                  isActive ? "text-[#3A57E8]" : "text-[#4E5969]",
                ].join(" ")
              }
            ></NavLink>

            <div
              className={`absolute w-[24px] h-[5px] bg-[#3A57E8] bottom-[0px] group-hover:block  ${
                currentPathName === "/cart" ? "block" : "hidden"
              }`}
            ></div>
          </div>
          {/* 電腦版未登入選單 */}
          <button
            onClick={
              auth ? () => toggleOpen("memberList") : () => setGuestIsOpen()
            }
            className={`${
              !auth ? "hidden md:block" : "hidden"
            } w-[95px] h-[32px] rounded-[100px] bg-[#3A57E8] text-center leading-[32px] text-[#fff]`}
          >
            登入/註冊
          </button>
        </div>

        {/* 手機版選單 */}
        <div className={`flex gap-[24px] ${search && "hidden"} md:hidden`}>
          {/* 手機版搜尋框按鈕 */}
          <span
            onClick={() => toggleOpen("search")}
            className={`icon-[solar--magnifer-bold-duotone] md:hidden w-[24px] h-[24px] text-[#4E5969] cursor-pointer hover:text-[#3A57E8] ${
              search && "hidden"
            }`}
          ></span>
          {/* 手機版選單按鈕 */}
          <div onClick={() => toggleOpen("list")} className={`md:hidden group`}>
            <div
              className={`icon-[solar--hamburger-menu-bold-duotone] w-[24px] h-[24px] cursor-pointer block group-hover:text-[#3A57E8] md:hidden ${
                currentPathName === "/searchOrder" ||
                currentPathName === "/cart"
                  ? "text-[#3A57E8]"
                  : "text-[#4E5969]"
              } `}
            ></div>
            <div
              className={`absolute w-[24px] h-[5px] bg-[#3A57E8] bottom-[0px] group-hover:block ${
                currentPathName === "/searchOrder" ||
                currentPathName === "/cart"
                  ? "block"
                  : "hidden"
              }`}
            ></div>
          </div>
          {/* 手機版會員選單 */}
          <button
            onClick={
              auth ? () => toggleOpen("memberList") : () => setGuestIsOpen()
            }
            className={`group ${!auth ? "md:hidden" : "md:block"}`}
          >
            {/* 登入icon */}
            <img
              src={auth ? memberIcon : ""}
              alt="會員"
              className={` w-[24px] h-[24px] cursor-pointer ${
                auth ? "block" : "hidden"
              }`}
            />
            {/* 未登入icon */}
            <span
              className={`icon-[solar--user-circle-bold-duotone] w-[24px] h-[24px] group-hover:bg-[#3A57E8]  ${
                auth ? "hidden" : "block"
              } `}
            ></span>
            {/* active 樣式 */}
            <div
              className={`absolute w-[24px] h-[5px] bottom-[0px] bg-[#3A57E8] group-hover:block ${
                currentPathName.includes("/memberCenter") ? "block" : "hidden"
              }`}
            ></div>
          </button>
        </div>

        {/* 手機版搜尋框 */}
        <div
          className={`w-[100%] flex justify-end items-center gap-[12px] ${
            search ? "block" : "hidden"
          } `}
        >
          <span
            onClick={() => toggleOpen("search")}
            className={`icon-[solar--arrow-left-outline] w-[24px] h-[24px] text-[#4E5969]`}
          ></span>
          <InputSearch
            onSearch={searchProduct}
            searchButton
            className={` w-[265px] h-[32px] `}
            placeholder="搜尋行程"
            required
          />
        </div>
      </section>
      {/* 手機版隱藏選單 */}
      <div
        className={`${
          list ? "block" : "hidden"
        } absolute z-[999] w-[100%] md:w-[20%] top-[56px] md:top-[60px] md:right-[20px] bg-[#fff] px-[8px] py-[4px] shadow-md md:hidden`}
      >
        {menuList.map((menuRoute) => (
          <NavLink
            onClick={() => setCloseList()}
            to={menuRoute.route}
            key={menuRoute.id}
            className="group p-[9px] block"
          >
            <div className="flex items-center gap-[16px]">
              <span
                className={`icon-[${getIconClassName(
                  menuRoute.lable
                )}] w-[24px] h-[24px] cursor-pointer group-hover:text-[#3A57E8] ${
                  currentPathName === `${menuRoute.route}`
                    ? "text-[#3A57E8]"
                    : "text-[#4E5969]"
                } `}
              ></span>

              <span
                className={`group-hover:text-[#3A57E8] ${
                  currentPathName === `${menuRoute.route}`
                    ? "text-[#3A57E8]"
                    : "text-[#4E5969]"
                }`}
              >
                {menuRoute.lable}
              </span>
            </div>
          </NavLink>
        ))}
      </div>
      {/* 手機版會員選單 */}
      <ul
        className={`${
          memberList ? "block" : "hidden"
        } absolute z-[999] w-[100%] md:w-[200px] top-[56px] md:top-[60px] md:right-[20px] bg-[#fff] px-[8px] py-[4px] shadow-md `}
      >
        {memberMenu.map((memberRoute) => (
          <NavLink
            onClick={() => setCloseList()}
            to={memberRoute.route}
            key={memberRoute.id}
            className="group p-[9px] block"
          >
            <div className="flex items-center gap-[16px]">
              <span
                className={`icon-[${getIconClassName(
                  memberRoute.lable
                )}] w-[24px] h-[24px] cursor-pointer group-hover:text-[#3A57E8] ${
                  currentPathName === `${memberRoute.route}`
                    ? "text-[#3A57E8]"
                    : "text-[#4E5969]"
                } `}
              ></span>

              <span
                className={`group-hover:text-[#3A57E8] ${
                  currentPathName === `${memberRoute.route}`
                    ? "text-[#3A57E8]"
                    : "text-[#4E5969]"
                }`}
              >
                {memberRoute.lable}
              </span>
            </div>
          </NavLink>
        ))}
      </ul>
    </>
  );
};

export default Header;
