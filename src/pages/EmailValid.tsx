import React, { useEffect } from "react";
// router
import { useLocation } from "react-router-dom";
// 圖片
import emailValiImg from "../assets/images/email-verify-success.png";
// api
import { FETCH_AUTH } from "../service/api";
// cookie
import { GET_COOKIES } from "../utils/js-cookie";

const EmailValid: React.FC = () => {
  // 取的路由query參數
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const VerificationCode = query.get("token");
  const email = query.get("email");

  useEffect(() => {
    const tempToken = GET_COOKIES("tmp_session");
    console.log(tempToken);
    FETCH_AUTH.MailCheck({
      action: "reg_confirm",
      token: '',
      data: {
        member_account: email,
        tmp_session: tempToken,
        token: VerificationCode,
      },
    });
  }, []);

  return (
    <div
      className={` flex flex-col gap-[20px] justify-center items-center my-[100px]`}
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
