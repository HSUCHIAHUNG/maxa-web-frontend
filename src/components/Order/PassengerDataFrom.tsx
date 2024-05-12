// 原生方法
import React, { ReactNode } from "react";
// redux
import { useSelector } from "react-redux";
import { RootState } from "../../stores/index";
// ui kit
import { Checkbox, Form, Input, Select } from "@arco-design/web-react";
import FormItem from "@arco-design/web-react/es/Form/form-item";
// 匯入組件
import PhoneInput from "../common/Form/PhoneInput";

// ui kit
const Option = Select.Option;

interface PassengerDataFromProps {
  title: string;
  fieldName: string;
  children?: ReactNode;
}

const PassengerDataFrom: React.FC<PassengerDataFromProps> = ({
  title,
  fieldName,
  children,
}) => {
  /** @func 全域狀態auth */
  const auth = useSelector((state: RootState) => state.auth.isMember);

  // 常用旅客資料
  const options = ["Beijing", "Shanghai", "Guangzhou"];

  return (
    <div
      className={` w-full border border-[#E5E6EB] border-solid rounded-[16px] py-[20px] px-[16px] md:px-[60px] md:py-[40px] `}
    >
      {/* 同步更新至會員中心選項 */}
      <div
        className={`flex flex-col w-full gap-[12px] mb-[12px] md:flex-row md:justify-between md:items-center md:mb-[20px]`}
      >
        <p className={`text-[16px] md:text-[20px] `}>{title}</p>
        <FormItem
          field={`${fieldName}UpdateFrequentTravelers`}
          required
          className={`w-auto mb-0 ${auth ? "block" : "hidden"}`}
        >
          <Checkbox value="訂購人資料" className={`p-0 `}>
            同步更新至會員中心
          </Checkbox>
        </FormItem>
      </div>
      {/* 常用旅客選單 */}
      <FormItem
        label="選擇常用旅客"
        field={`${fieldName}FrequentTravelers`}
        required
        rules={[{ required: true, message: "必填" }]}
      >
        <Select placeholder="Please select" allowClear>
          {options.map((option, index) => (
            <Option key={option} disabled={index === 3} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </FormItem>
      {/* 姓名 */}
      <FormItem
        label="姓名"
        field={`${fieldName}Name`}
        required
        rules={[{ required: true, message: "必填" }]}
      >
        <Input placeholder="請填寫姓名" allowClear />
      </FormItem>
      {/* 身分證 */}
      <FormItem
        label="身分證或護照號碼"
        field={`${fieldName}Id`}
        required
        rules={[{ required: true, message: "必填" }]}
      >
        <Input placeholder="請填寫身分證或護照號碼" allowClear />
      </FormItem>
      {/* 電話 */}
      <Form.Item
        label="電話"
        field={`${fieldName}phone`}
        required
        rules={[{ required: true, message: "必填" }]}
      >
        <PhoneInput />
      </Form.Item>
      {/* 信箱 */}
      <FormItem
        label="Email"
        field={`${fieldName}Email`}
        required
        rules={[{ required: true, message: "必填" }]}
      >
        <Input placeholder="請輸入信箱" />
      </FormItem>
      {/* 清空表單 */}
      {children}
    </div>
  );
};

export default PassengerDataFrom;
