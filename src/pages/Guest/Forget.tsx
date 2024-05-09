import React from "react";
// ui kit
import { Form, Input, Button } from "@arco-design/web-react";
// 驗證規則
import { email } from "../../utils/rules";
// 自定義hook
import useCountdownTimer from "../../hook/useCountdownTimer";

interface forgetProps {
  className?: string;
  setModel: (state: string) => void;
  model: string;
}

interface changeModel {
  [key: string]: string;
}

const Forget: React.FC<forgetProps> = (props) => {
  // 父層props
  const { className, setModel, model } = props;

  // 計時器狀態管理
  const { countdown, resetTimer, setCountdown } = useCountdownTimer({
    duration: -1, // Duration in seconds
    onFinish: () => {
      setModel("forgetTimerEnd");
      resetTimer(); // Reset the timer when it finishes
    },
  });

  // ui kit
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  /** @func login表單提交 */
  const forgetSubmit = (value: object) => {
    console.log(value);
    /** @func 表單提交後開始計時器 */

    if (model !== "forgetTimerStart") {
      setModel("forgetTimerStart");
      setCountdown(5);
    }
  };

  /** @const {object} 標題文字動態切換 */
  const changeTitle: changeModel = {
    fotgetDefault: "請輸入註冊信箱以寄送重設密碼連結",
    forgetTimerStart:
      "已將重設密碼連結發送至 xxx@example.com請點擊連結以重設密碼",
    forgetTimerEnd:
      "已將重設密碼連結發送至 xxx@example.com請點擊連結以重設密碼",
  };

  /** @const {object} 按鈕文字動態切換 */
  const changeButton: changeModel = {
    fotgetDefault: "送出",
    forgetTimerStart: `(${countdown}後可重新發送)`,
    forgetTimerEnd: "重新發送",
  };

  return (
    <Form
      form={form}
      autoComplete="on"
      requiredSymbol={{ position: "start" }}
      layout="vertical"
      onSubmit={forgetSubmit}
      className={` ${className} pt-[16px] w-[260px]`}
    >
      <p className="text-[13px] text-center pb-[16px]">{changeTitle[model]}</p>
      <FormItem
        label="註冊信箱"
        field="email"
        required
        className={`${model !== "fotgetDefault" ? "hidden" : "block"}`}
        rules={email}
      >
        <Input placeholder="請輸入信箱" />
      </FormItem>
      <FormItem className={``}>
        <Button
          className={`w-[100%] !bg-[#3A57E8]`}
          type="primary"
          htmlType="submit"
          loading={model === "forgetTimerStart"}
          disabled={model === "forgetTimerStart"}
        >
          {changeButton[model]}
        </Button>
      </FormItem>
      <FormItem className={`${model !== "fotgetDefault" ? "hidden" : "block"}`}>
        <Button
          onClick={() => setModel("login")}
          className={`w-[100%] !bg-[#F2F3F5]`}
          type="text"
        >
          <p className={`text-[#4E5969]`}>取消</p>
        </Button>
      </FormItem>
    </Form>
  );
};

export default Forget;
