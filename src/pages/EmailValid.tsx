import React from "react";
import emailValiImg from "../assets/images/email-verify-success.png";

const EmailValid: React.FC = () => {
  return (
    <div
      className={` absolute top-0 right-0 bottom-0 left-0 flex flex-col gap-[20px] justify-center items-center ]`}
    >
      <img src={emailValiImg} alt="404" />
      <p className={`text-[16px] w-[280px] text-center`}>
        Email驗證完成
        <br />
        系統將自動跳轉畫面
      </p>
    </div>
  );
};

export default EmailValid;
