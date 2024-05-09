import React from "react";

interface oAuthProps {
  className?: string;
  setModel: (state: string) => void;
  model: string;
}

const OAuth: React.FC<oAuthProps> = (props) => {
  const { model, setModel } = props;
  

  /** @const 非忘記密碼或登入表單 */
  const isDisplay = model !== "signUpDefault" && model !== "login";

  return (
    <>
      <div
        className={`flex justify-center text-[12px] gap-[1px] ${
          isDisplay ? "hidden" : "block"
        }`}
      >
        <button>{`${
          model === "signUpDefault" ? "已有MAXA會員？" : "還沒有帳號嗎？"
        }`}</button>
        <button
          onClick={() =>
            model === "signUpDefault"
              ? setModel("login")
              : setModel("signUpDefault")
          }
          className={`text-[#3A57E8]`}
        >
          {`${model === "signUpDefault" ? "立即登入" : "點此註冊"}`}
        </button>
      </div>
      <div className={`flex justify-center text-[12px] gap-[1px]`}>
        <p>註冊或登入代表您已同意</p>
        <p className={`text-[#3A57E8]`}>使用者條款</p>
        <p>與</p>
        <p className={`text-[#3A57E8]`}>隱私權條款</p>
      </div>
    </>
  );
};

export default OAuth;
