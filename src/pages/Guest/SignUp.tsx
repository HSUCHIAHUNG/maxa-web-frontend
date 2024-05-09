// react原生方法
import React from "react";
// ui kit
import { Form, Input, Button } from "@arco-design/web-react";
// 驗證規則
import { email, password } from "../../utils/rules";
// 自定義hook
import useCountdownTimer from "../../hook/useCountdownTimer";

interface signUpProps {
  className?: string;
  model: string;
  setModel: (state: string) => void;
}

interface changeModel {
  [key: string]: string;
}

const Sigup: React.FC<signUpProps> = (props) => {
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

  /** @func signUp表單提交 */
  const signUpSubmit = (value: object) => {
    // setModel("signUpDefault");
    console.log(value);
    /** @func 表單提交後開始計時器 */
    if (model !== "signUpTimerStart") {
      setModel("signUpTimerStart");
      setCountdown(5);
    }
  };

  /** @const {object} 按鈕文字動態切換 */
  const changeButton: changeModel = {
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
        onSubmit={signUpSubmit}
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
          field="namea"
          required
          rules={[{required:true}]}
          className={model !== "signUpDefault" ? "hidden" : "block"}
        >
          <Input placeholder="請輸入姓名" />
        </FormItem>
        <FormItem
          label="密碼"
          field="password"
          required
          rules={password}
          className={model !== "signUpDefault" ? "hidden" : "block"}
        >
          <Input.Password placeholder="請輸入密碼" autoComplete="on" />
        </FormItem>
        <div
          className={`flex flex-col text-center w-[280px] pb-[16px] ${
            model !== "signUpDefault" ? "block" : "hidden"
          }`}
        >
          <p>註冊即將完成</p>
          <p>MAXA已將驗證信發送至xxx@example.com</p>
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
