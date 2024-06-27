// react原生方法
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
// redux
import { useSelector } from "react-redux";
import { authActions } from "../../stores/auth.ts";
import { useAppDispatch, RootState } from "../../stores/index.ts";
// img
import Logo from "@/assets/images/header/header_text.svg";
import LoginImg from "../../assets/images/login.png";
// 組件
import Login from "../Guest/Login.tsx";
import SignUp from "./SignUp.tsx";
import Forget from "./Forget.tsx";
import OAuth from "../../components/Guest/OAuth.tsx";
import Terms from "../../components/Guest/Terms.tsx";

// title切換
interface Titles {
  [key: string]: string;
}

// 表單切換
interface ComponentSwitch {
  [key: string]: JSX.Element;
}

function GuestPage() {
  // 登入註冊狀態切換
  const [model, setModel] = useState("login");

  /** @const redux方法呼叫用的方法(全域狀態) */
  const dispatch = useAppDispatch();

  /** @const 取得登入狀態(全域狀態) */
  const auth = useSelector((state: RootState) => state.auth.isMember);

  /** @const 取得dilog開關狀態(全域狀態) */
  const guestDialog = useSelector((state: RootState) => state.auth.guestDialog);

  /** @func 控制diaLog開關(全域狀態) */
  const guestDialogToggle = () => {
    dispatch(authActions.guestDialogToggle());
    setModel("login");
    // 恢復滾動軸
    document.body.style.overflow = "";
  };

  // 去除視窗外層滾動軸
  useEffect(() => {
    // Lock scrolling when Mask component mounts
    document.body.style.overflow = "hidden";
    // Unlock scrolling when Mask component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // 點擊灰底區域關閉視窗
  const handleBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("bg-[black]") && guestDialog && !auth) {
      guestDialogToggle();
    }
  };

  /** @const object title切換 */
  const titles: Titles = {
    login: "歡迎登入MAXA",
    signUpDefault: "註冊MAXA會員",
    signUpTimerStart: "註冊會員",
    signUpTimerEnd: "註冊會員",
    fotgetDefault: "忘記密碼",
    forgetTimerStart: "忘記密碼",
    forgetTimerEnd: "忘記密碼",
  };

  /** @const object 表單切換 */
  const componentSwitch: ComponentSwitch = {
    login: <Login setModel={setModel} />,
    signUpDefault: <SignUp model={model} setModel={setModel} />,
    signUpTimerStart: <SignUp model={model} setModel={setModel} />,
    signUpTimerEnd: <SignUp model={model} setModel={setModel} />,
    fotgetDefault: <Forget setModel={setModel} model={model} />,
    forgetTimerStart: <Forget setModel={setModel} model={model} />,
    forgetTimerEnd: <Forget setModel={setModel} model={model} />,
  };

  return createPortal(
    // 灰底背景
    <section
      className={`fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-[black] bg-opacity-25 ${
        guestDialog && !auth ? "block" : "hidden"
      }`}
      onClick={(e) => handleBackdropClick(e)}
    >
      {/* 內容 */}
      <div className=" w-[320px] h-[580px] bg-[white] pb-[20px] rounded-[16px] md:flex md:justify-center md:items-center md:w-[768px] ">
        {/* 左 */}
        <div className="hidden w-[328px] h-[540px] pt-[4px]  md:block">
          <img src={LoginImg} alt="maxa" className={`rounded-[8px]`} />
        </div>
        {/* 右 */}
        <div
          className={`w-[320px] max-h-[80vh] h-[-webkit-fill-available] overflow-y-auto pt-[16px] flex flex-col items-center md:w-[420px] justify-between `}
        >
          <button onClick={guestDialogToggle} className={`self-end`}>
            <span className="icon-[ri--close-fill] cursor-pointer h-[16px] w-[16px] mr-[16px]   "></span>
          </button>
          <div>
            {model === "login" || model === "signUpDefault" ? (
              <p className={`text-center text-[24px] font-extrabold `}>{titles[model]}</p>
            ) : (
              <>
                <p className={`text-center py-[8px]`}>{titles[model]}</p>
                <img src={Logo} alt="Logo" className={`w-[120px] h-[28px] `} />
              </>
            )}
          </div>
          {componentSwitch[model]}
          <OAuth model={model} />
          <Terms model={model} setModel={setModel} />
        </div>
      </div>
    </section>,
    document.getElementById("modal")!
  );
}

export default GuestPage;
