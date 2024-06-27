// react原生方法
import React, { useState } from "react";
// ui kit
import { Form, Input, Button, Message } from "@arco-design/web-react";
// 驗證規則
import { email, password } from "../../utils/rules";
// 自定義hook
import useCountdownTimer from "../../hook/useCountdownTimer";
// api測試
import { FETCH_AUTH } from "../../service";
// cookie
import { SET_COOKIES } from "../../utils/js-cookie.ts";

interface SignUpProps {
  className?: string;
  model: string;
  setModel: (state: string) => void;
}

interface ChangeModel {
  [key: string]: string;
}

const Sigup: React.FC<SignUpProps> = (props) => {
  // 父層props
  const { className, setModel, model } = props;

  // 計時器狀態管理
  const { countdown, resetTimer, setCountdown } = useCountdownTimer({
    duration: -1,
    onFinish: () => {
      setModel("signUpTimerEnd");
      resetTimer();
    },
  });

  // ui kit
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  // 註冊會員(註冊信階段信箱顯示)
  const [checkEmail, setCheckEmail] = useState("");

  /** @func signUp表單提交 */
  const submit = async (value: {
    email: string;
    password: string;
    name: string;
  }) => {
    if (model === "signUpDefault" || model === 'signUpTimerEnd') {
      // 發送註冊API
      const resp = await FETCH_AUTH.SignUp({
        action: "reg",
        data: {
          member_account: value.email,
          member_passwd: value.password,
          member_name: value.name,
        },
      });
      const { data: respData = {} } = resp;
      const { code, success, message, data } = respData;
      const { member_account, tmp_session } = data;

      // 儲存email待後續顯示使用
      setCheckEmail(member_account);

      // 儲存臨時token
      SET_COOKIES("tmp_session", tmp_session);

      // 處理顯示訊息文字
      const index = message.indexOf(":") + 1;
      const result = message.substring(index);

      // 如果成功繼續信箱驗證步驟
      if (success) {
        Message.success("註冊成功");
      }

      // 註冊成功信箱尚未驗證(如果已在驗證信箱階段就不用顯示訊息)
      if (code === 2 && model !== 'signUpTimerEnd') {
        Message.info(result);
      }

      // 如果失敗顯示訊息或是繼續信箱驗證
      if (!success && code !== 2) {
        Message.info(result);
        return;
      }
    }

    // 表單提交後開始計時器
    setModel("signUpTimerStart");
    setCountdown(60);
  };

  /** @const {object} 按鈕文字動態切換 */
  const changeButton: ChangeModel = {
    signUpDefault: "註冊",
    signUpTimerStart: `(${countdown}後可重新發送)`,
    signUpTimerEnd: "重新發送",
  };

  return (
    <>
      <Form
        form={form}
        autoComplete="on"
        requiredSymbol={{ position: "start" }}
        layout="vertical"
        onSubmit={submit}
        className={` ${className} pt-[14px] w-[260px]`}
      >
        <FormItem
          label="信箱"
          field="email"
          required
          rules={email}
          className={model !== "signUpDefault" ? "hidden" : "block"}
        >
          <Input placeholder="請輸入信箱" />
        </FormItem>
        <FormItem
          label="姓名"
          field="name"
          required
          rules={[{ required: true, message: "必填" }]}
          className={model !== "signUpDefault" ? "hidden" : "block"}
        >
          <Input placeholder="請輸入姓名" />
        </FormItem>
        <div className={`flex gap-[8px]`}>
          <FormItem
            label="密碼"
            field="password"
            required
            rules={password}
            className={model !== "signUpDefault" ? "hidden" : "block"}
          >
            <Input.Password placeholder="請輸入密碼" autoComplete="on" />
          </FormItem>
          <FormItem
            label="確認密碼"
            field="confirmPassword"
            required
            rules={[
              {
                validator: (v, cb) => {
                  if (!v) {
                    return cb("新密碼欄位為必填");
                  } else if (form.getFieldValue("password") !== v) {
                    return cb("新密碼不同");
                  }
                  cb(null);
                },
              },
            ]}
            className={model !== "signUpDefault" ? "hidden" : "block"}
          >
            <Input.Password placeholder="請輸入密碼" autoComplete="on" />
          </FormItem>
        </div>
        <div
          className={`flex flex-col text-center  pb-[16px] ${
            model !== "signUpDefault" ? "block" : "hidden"
          }`}
        >
          <p>註冊即將完成</p>
          <p>MAXA已將驗證信發送至{checkEmail}</p>
          <p>請點擊驗證連結以完成註冊</p>
        </div>
        <FormItem className={``}>
          <Button
            className={`w-[100%] !bg-[#3A57E8]`}
            type="primary"
            htmlType="submit"
            loading={model === "signUpTimerStart"}
            disabled={model === "signUpTimerStart"}
          >
            {changeButton[model]}
          </Button>
        </FormItem>
      </Form>
      <div
        className={`flex justify-center items-center gap-[16px] ${
          model !== "signUpDefault" ? "hidden" : "block"
        } `}
      >
        <div className={`h-[1px] w-[48px] bg-[#E5E6EB]`}></div>
        <span className={`text-12px`}>或使用第三方帳戶註冊</span>
        <div className={`h-[1px] w-[48px] bg-[#E5E6EB]`}></div>
      </div>
    </>
  );
};

export default Sigup;
