// react原生方法
import React, { useState } from "react";
// router
import { useNavigate } from "react-router-dom";
// 驗證規則
import { email } from "../utils/rules";
// ui kit
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Message,
} from "@arco-design/web-react";
// 匯入圖片
import bannerImg from "../assets/images/memberCenter/member-Center.png";
// 匯入組件
import Banner from "../components/common/Banner";
// json
import allProduct from "../assets/API/allProduct.json";

const SearchOrder: React.FC = () => {
  // 訂單切換狀態
  const [tabState, setTabState] = useState("使用訂單編號查詢");

  // 切換路由方法
  const navigate = useNavigate();

  // ui kit
  const FormItem = Form.Item;
  const [form] = Form.useForm();
  const Option = Select.Option;

  // login表單提交
  const submit = (_value: {
    email: string;
    departureDate: string;
    route: string;
  }) => {
    navigate("/orderContent/A1B2C3D4E5");
    Message.success("查詢成功");

    // if (tabState === "使用訂單編號查詢") {
    //   navigate("/orderContent/A1B2C3D4E5");
    // }

    // if (
    //   value.route === "503 大溪快線" &&
    //   tabState === "使用預定日期、路線查詢"
    // ) {
    //   Message.success("查詢成功");
    //   navigate("/orderContent/A1B2C3D4E5");
    // } else {
    //   Message.error("查無訂單");
    // }
  };

  // 預定路線
  const routes = allProduct.map((item) => item.name);

  return (
    <div className={`max-w-[1920px] `}>
      {/* banner */}
      <Banner url={bannerImg} text={["查", "尋", "訂", "單"]}></Banner>

      {/* 內容 */}
      <div
        className={`md:w-[720px] md:m-[0_auto] md:mb-[80px] md:mt-[40px] md:rounded-[16px] md:border md:border-solid md:border-[#E5E6EB] `}
      >
        {/* tabs */}
        <div
          className={`flex items-center justify-center gap-[8px] px-[8px] py-[12px] border-b border-solid border-[#E5E6EB] md:justify-start md:px-[16px] md:py-[8px] `}
        >
          <button
            onClick={() => setTabState("使用訂單編號查詢")}
            className={` ${
              tabState === "使用訂單編號查詢"
                ? "text-[#3A57E8]"
                : "text-[#4E5969]"
            }`}
          >
            使用訂單編號查詢
          </button>
          <div
            className={`border-r-[2px] border-solid border-[#E5E6EB] h-[12px]`}
          ></div>
          <button
            onClick={() => setTabState("使用預定日期、路線查詢")}
            className={` ${
              tabState === "使用預定日期、路線查詢"
                ? "text-[#3A57E8]"
                : "text-[#4E5969]"
            }`}
          >
            使用預定日期、路線查詢
          </button>
        </div>
        {/* 查詢訂單 */}
        {tabState === "使用訂單編號查詢" && (
          <Form
            form={form}
            autoComplete="on"
            layout="vertical"
            onSubmit={submit}
            className={`py-[20px] px-[16px] md:p-[40px] `}
          >
            <p className={`text-[16px] pb-[12px] md:pb-[20px]`}>查詢訂單</p>
            <FormItem label="Email" field="email" required rules={email}>
              <Input placeholder="Please enter" />
            </FormItem>
            <FormItem
              label="訂單編號"
              field="orderNumber"
              required
              rules={[{ required: true, message: "請輸入訂單編號" }]}
            >
              <Input placeholder="Please enter" />
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
        )}
        {/* 使用預定日期、路線查詢 */}
        {tabState === "使用預定日期、路線查詢" && (
          <Form
            form={form}
            autoComplete="on"
            layout="vertical"
            onSubmit={submit}
            className={`py-[20px] px-[16px] md:p-[40px] ${
              tabState === "使用預定日期、路線查詢" ? "block" : "hidden"
            } `}
          >
            <p className={`text-[16px] pb-[12px] md:pb-[20px]`}>查詢訂單</p>
            <FormItem label="Email" field="email" required rules={email}>
              <Input placeholder="Please enter" />
            </FormItem>
            <FormItem
              label="去程日期"
              field="departureDate"
              required
              rules={[{ required: true, message: "請輸入去程日期" }]}
            >
              <DatePicker placeholder="Please select" className={`w-full`} />
            </FormItem>
            <FormItem
              label="預定路線"
              field="route"
              required
              rules={[{ required: true, message: "請選擇預定路線" }]}
            >
              <Select placeholder="Please select" allowClear>
                {routes.map((option) => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
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
        )}
      </div>
    </div>
  );
};
export default SearchOrder;
