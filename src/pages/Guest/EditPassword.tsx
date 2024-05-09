import React from "react";
// ui kit
import { Form, Input, Button } from "@arco-design/web-react";
// 驗證規則
import { email } from "../../utils/rules";

const EditPassword: React.FC = () => {
  // ui kit
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  /** @func login表單提交 */
  const forgetSubmit = (value: object) => {
    console.log(value);
  };

  return (
    <div
      className={`w-[auto] mt-[20px] mx-[12px] rounded-[16px] bg-[#fff] border-[2px] border-solid border-[#E5E6EB] md:w-[600px] md:h-[394px] md:m-[0_auto] md:mt-[60px] `}
    >
      <Form
        form={form}
        autoComplete="on"
        requiredSymbol={{ position: "start" }}
        layout="vertical"
        onSubmit={forgetSubmit}
        className={`py-[20px] px-[16px] md:py-[40px] md:px-[60px]`}
      >
        <p className={`text-[20px] pb-[12px] md:pb-[20px]`}>修改密碼</p>
        <p className={`md:pb-[20px] pb-[12px]`}>註冊信箱：xxx@example.com</p>
        <FormItem label="新密碼" field="password" required rules={email}>
          <Input.Password placeholder="請輸入新密碼" autoComplete="on" />
        </FormItem>
        <FormItem
          label="確認新密碼"
          field="checkPassword"
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
        >
          <Input.Password placeholder="請確認新密碼" autoComplete="on" />
        </FormItem>
        <FormItem className={``}>
          <Button
            className={`w-[100%] !bg-[#3A57E8] md:w-[88px]`}
            type="primary"
            htmlType="submit"
          >
            確認送出
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default EditPassword;
