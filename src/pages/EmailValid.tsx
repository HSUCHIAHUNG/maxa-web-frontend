import React, { useEffect } from "react";
// router
import { useLocation, useNavigate } from "react-router-dom";
// 圖片
import emailValiImg from "../assets/images/email-verify-success.png";
// api
import { FETCH_AUTH } from "../service/api";
// cookie
import { GET_COOKIES } from "../utils/js-cookie";
import { Message } from "@arco-design/web-react";

const EmailValid: React.FC = () => {
  // 取的路由query參數
  const location = useLocation();

  // 路由導向
  const navigate = useNavigate();

  // 取得路由qurty參數
  const query = new URLSearchParams(location.search);
  const VerificationCode = query.get("token");
  const email = query.get("email");

  useEffect(() => {
    async function fetchData() {
      try {
        const tempToken = GET_COOKIES("tmp_session");
        const resp = await FETCH_AUTH.MailCheck({
          action: "reg_confirm",
          token: "",
          data: {
            member_account: email,
            tmp_session: tempToken,
            token: VerificationCode,
          },
        });
        const { code } = resp.data;

        // token已過期
        if (code === -13) {
          Message.info("驗證信件已過期");
          navigate("/");
          return;
        }

        // code < 0都是api沒有成功導向首頁
        if (code < 0) {
          Message.info("請登入帳號取得驗證信件");
          navigate("/");
        }
      } catch {
        Message.info("請登入帳號取得驗證信件");
        navigate("/");
      }
    }

    fetchData();
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
