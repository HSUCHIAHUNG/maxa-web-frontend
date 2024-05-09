// react原生方法
import React from "react";
// ui kit
import { Form, Input, Button } from "@arco-design/web-react";

const SearchOrder: React.FC = () => {
  // ui kit
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  /** @func login表單提交 */
  const loginSubmit = (value: object) => {
    console.log(value);
  };
  return (
    <>
      <div className={`max-w-[1920px] `}>
        {/* banner */}
        <div className={` h-[80px] bg-[#E5E6EB] md:h-[160px] `}></div>
        {/* 內容 */}
        <div
          className={`md:mx-[24px] md:mt-[40px] md:rounded-[16px] md:border md:border-solid md:border-[#E5E6EB] `}
        >
          {/* tabs */}
          <ul
            className={`flex items-center justify-center gap-[8px] px-[8px] py-[12px] border-b border-solid border-[#E5E6EB] md:justify-start md:px-[16px] md:py-[8px] `}
          >
            <li className={`text-[#4E5969]`}>使用訂單編號查詢</li>
            <li
              className={`border-r-[2px] border-solid border-[#E5E6EB] h-[12px]`}
            ></li>
            <li className={`text-[#4E5969]`}>使用預定日期、路線查詢</li>
          </ul>
          {/* 查詢訂單 */}
          <Form
            form={form}
            autoComplete="on"
            layout="vertical"
            onSubmit={loginSubmit}
            className={`py-[20px] px-[16px] md:p-[40px] `}
          >
            <p className={`text-[16px] pb-[12px] md:pb-[20px]`}>查詢訂單</p>
            <FormItem label="註冊信箱" field="email" required>
              <Input placeholder="請輸入信箱" />
            </FormItem>
            <FormItem label="密碼" field="password" required>
              <Input.Password placeholder="請輸入密碼" autoComplete="on" />
            </FormItem>
            <FormItem className={``}>
              <Button
                className={`w-[100%] !bg-[#3A57E8]`}
                type="primary"
                htmlType="submit"
              >
                查詢
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </>
  );
};
export default SearchOrder;
