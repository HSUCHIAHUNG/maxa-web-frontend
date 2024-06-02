// react原生方法
import React from "react";
// redux
import { useSelector } from "react-redux";
import { RootState } from "../../stores/index";
// 匯入組件
import OrderDetails from "../../components/common/OrderDetails";
import PhoneInput from "../../components/common/Form/PhoneInput";
import PassengerDataFrom from "../../components/Order/PassengerDataFrom";
// ui kit
import { Form, Steps, Checkbox, Input } from "@arco-design/web-react";
// 驗證規則
import { email } from "../../utils/rules";

// ui kit
const Step = Steps.Step;
const FormItem = Form.Item;

const PassengerData: React.FC = () => {
  // 訂車階段(起訖站、日期、時間狀態))
  const bookingStage = useSelector(
    (state: RootState) => state.order.bookingStage
  );

  // 票數及種類
  const passengerTicket = useSelector(
    (state: RootState) => state.order.bookingData.passengerTicket
  );

  // 總票數及票種彙整
  const totalTicketType = [
    passengerTicket?.adult,
    passengerTicket?.child,
    passengerTicket?.old,
  ];

  /** @func 全域狀態auth */
  const auth = useSelector((state: RootState) => state.auth.isMember);

  // ui kit
  const [form] = Form.useForm();

  // 控制訂車階段顯示
  const isOpen = () => (bookingStage !== "passengerData" ? "hidden" : "block");

  // 訂單乘客資料送出
  function loginSubmit(value: object) {
    console.log(value);
  }

  return (
    <div className={` max-w-[900px] m-[0_auto] px-[12px] ${isOpen()} `}>
      <div className={`xl:flex xl:justify-center`}>
        <Steps
          type="dot"
          current={3}
          className={`hidden pt-[32px] pb-[20px] xl:w-[900px] md:flex `}
        >
          <Step title="1. 選擇日期與票數" className={`!text-[14px]`} />
          <Step title="2. 閱讀契約" />
          <Step title="3. 填寫資料" />
          <Step title="4. 付款" />
        </Steps>
      </div>
      <Form
        form={form}
        autoComplete="on"
        requiredSymbol={{ position: "start" }}
        layout="vertical"
        onSubmit={loginSubmit}
        className={`flex flex-col m-[0_auto] gap-[16px] my-[18px] md:my-[20px] md:gap-[20px] md:w-[560px] xl:flex-row-reverse xl:w-[900px] `}
      >
        {/* 訂單明細 */}
        <OrderDetails totalTicketType={totalTicketType} buttonState={'pendingPayment'}></OrderDetails>
        <div className={`xl:w-[560px] flex flex-col gap-[16px] md:gap-[20px]`}>
          {/* 訂購人資料 */}
          <div
            className={` w-full border border-[#E5E6EB] border-solid rounded-[16px] py-[20px] px-[16px] md:px-[60px] md:py-[40px] `}
          >
            {/* 同步更新至會員中心選項 */}
            <div
              className={`flex flex-col w-full gap-[12px] mb-[12px] md:flex-row md:justify-between md:items-center md:mb-[20px]`}
            >
              <p className={`text-[16px] md:text-[20px] `}>訂購人資料</p>
              <FormItem
                field="orderUpdateFrequentTravelers"
                className={`w-auto mb-0 ${auth ? "block" : "hidden"}`}
              >
                <Checkbox value="訂購人資料" className={`p-0`}>
                  同步更新至會員中心_個人資料
                </Checkbox>
              </FormItem>
            </div>

            {/* 姓名 */}
            <FormItem label="姓名" field="orderName">
              <Input placeholder="請填寫姓名" allowClear />
            </FormItem>

            {/* 身分證 */}
            <FormItem label="身分證或護照號碼" field="orderId">
              <Input placeholder="請填寫身分證或護照號碼" allowClear />
            </FormItem>

            {/* 電話 */}
            <Form.Item label="電話" field="orderphone">
              <PhoneInput />
            </Form.Item>

            {/* 信箱 */}
            <FormItem label="Email" field="orderEmail" rules={email}>
              <Input placeholder="請輸入信箱" />
            </FormItem>
          </div>

          {/* 取票人資料 */}
          <PassengerDataFrom title={"取票人資料"} fieldName={"taker"} isRequired>
            <FormItem className={`md:flex md:justify-end `}>
              <button
                type="button"
                onClick={() =>
                  form.resetFields([
                    "takerFrequentTravelers",
                    "takerName",
                    "takerId",
                    "takerphone",
                    "takerEmail",
                  ])
                }
                className={`bg-[#F2F3F5] w-full py-[5px] text-[#4E5969] md:w-[88px] rounded-[2px] `}
              >
                清空表單
              </button>
            </FormItem>
          </PassengerDataFrom>

          {/* 搭乘人資料 */}
          {Object.values(passengerTicket).map((_item, index) => (
            <PassengerDataFrom
              key={index}
              title={`搭乘人資料_${index + 1}`}
              fieldName={`passenger${index + 1}`}
            >
              <FormItem className={`md:flex md:justify-end `}>
                <button
                  type="button"
                  onClick={() =>
                    form.resetFields([
                      `passenger${index + 1}FrequentTravelers`,
                      `passenger${index + 1}Name`,
                      `passenger${index + 1}Id`,
                      `passenger${index + 1}phone`,
                      `passenger${index + 1}Email`,
                    ])
                  }
                  className={`bg-[#F2F3F5] w-full py-[5px] text-[#4E5969] md:w-[88px] rounded-[2px] `}
                >
                  清空表單
                </button>
              </FormItem>
            </PassengerDataFrom>
          ))}
        </div>
      </Form>
    </div>
  );
};

export default PassengerData;
