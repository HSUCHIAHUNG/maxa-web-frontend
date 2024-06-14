// react原生方法
import React from "react";
// redux
import { authActions } from "../../stores/auth.ts";
import { useAppDispatch } from "../../stores/index.ts";
// ui kit
import { Form, Input, Button, Message } from "@arco-design/web-react";
// 驗證規則
import { email, password } from "../../utils/rules";

interface LoginProps {
  className?: string;
  setModel: (state: string) => void;
}

const Login: React.FC<LoginProps> = (props) => {
  // 父層props
  const { className, setModel } = props;
  // ui kit
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  // redux方法呼叫
  const dispatch = useAppDispatch();

  /** @func login表單提交 */
  const submit = (value: object) => {
    console.log(value);
    dispatch(authActions.isLogin());
    Message.success("登入成功");
  };
  return (
    <>
      <Form
        form={form}
        autoComplete="off"
        requiredSymbol={{ position: "start" }}
        layout="vertical"
        onSubmit={submit}
        className={` ${className} pt-[45px] w-[260px]`}
      >
        <FormItem label="註冊信箱" field="email" required rules={email}>
          <Input placeholder="請輸入信箱" />
        </FormItem>
        <FormItem label="密碼" field="password" required rules={password}>
          <Input.Password placeholder="請輸入密碼" autoComplete="on" />
        </FormItem>
        <button
          type="button"
          onClick={() => setModel("fotgetDefault")}
          className={`text-right mb-[8px] text-[#3A57E8]`}
        >
          忘記密碼
        </button>
        <FormItem className={``}>
          <Button
            className={`w-[100%] !bg-[#3A57E8]`}
            type="primary"
            htmlType="submit"
          >
            登入
          </Button>
        </FormItem>
      </Form>
      <div className={`flex justify-center items-center gap-[16px]`}>
        <div className={`h-[1px] w-[72px] bg-[#E5E6EB]`}></div>
        <span className={`text-12px`}>使用快速登入</span>
        <div className={`h-[1px] w-[72px] bg-[#E5E6EB]`}></div>
      </div>
    </>
  );
};
export default Login;
