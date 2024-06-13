import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/index";
import OrderDetails from "../../components/common/OrderDetails";
import PhoneInput from "../../components/common/Form/PhoneInput";
import PassengerDataFrom from "../../components/Order/PassengerDataFrom";
import { Form, Steps, Checkbox, Input } from "@arco-design/web-react";
import { email } from "../../utils/rules";

const Step = Steps.Step;
const FormItem = Form.Item;

const PassengerData: React.FC = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [form] = Form.useForm();
  const [isSticky, setIsSticky] = useState(false);
  const orderDetailsRef = useRef<HTMLDivElement>(null);

  // 單程票or來回票
  const tabState = useSelector((state: RootState) => state.order.ticket);

  useEffect(() => {
    const handleScroll = () => {
      if (orderDetailsRef.current) {
        const rect = orderDetailsRef.current.getBoundingClientRect();
        setIsSticky(rect.top < -320);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 初始调用，以防止页面刷新时状态不正确
    handleScroll();

    // 在组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bookingStage = useSelector(
    (state: RootState) => state.order.bookingStage
  );

  const passengerTicket = useSelector(
    (state: RootState) => state.order.bookingData.passengerTicket
  );

  const passengerTicketTotal = Object.values(passengerTicket).reduce(
    (acc, obj) => acc + obj.total,
    0
  );

  const totalTicketType = [
    passengerTicket?.adult,
    passengerTicket?.child,
    passengerTicket?.old,
  ];

  // 計算總金額
  const totalAmount = () => {
    if (Object.keys(passengerTicket).length > 0) {
      return (
        passengerTicket.adult.total * 399 +
        passengerTicket.child.total * 200 +
        passengerTicket.old.total * 200
      );
    }
    return 100;
  };

  const auth = useSelector((state: RootState) => state.auth.isMember);

  const isOpen = () => (bookingStage !== "passengerData" ? "hidden" : "block");

  const loginSubmit = (value: object) => {
    console.log(value);
    navigate(`/creaditCard/${param.id}`);
  };

  return (
    <>
      <div
        className={
          isSticky
            ? "sticky flex justify-between items-center top-0 bg-[#fff] w-full z-[100] shadow-md h-[52px] px-[12px] md:px-[20px] duration-100"
            : " overflow-hidden h-0 duration-100"
        }
      >
        {tabState === "roundTripTicket" && (
          <span>商品合計 NT${totalAmount() * 2}</span>
        )}

        {tabState === "oneWayTicket" && <p>NT${totalAmount()}</p>}

        <button
          onClick={form.submit}
          className={` px-[16px] py-[5px] text-[#fff] bg-[#3A57E8] `}
        >
          確認付款
        </button>
      </div>
      <div className={`max-w-[900px] m-[0_auto] px-[12px] ${isOpen()}`}>
        <div className={`xl:flex xl:justify-center`}>
          <Steps
            type="dot"
            current={3}
            className={`hidden pt-[32px] pb-[20px] xl:w-[900px] md:flex`}
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
          className={`flex flex-col m-[0_auto] gap-[16px] my-[18px] md:my-[20px] md:gap-[20px] md:w-[560px] xl:flex-row-reverse xl:w-[900px]`}
        >
          {/* 訂單明細 */}
          <div ref={orderDetailsRef}>
            <OrderDetails
              totalTicketType={totalTicketType}
              paymentState={3}
              title={false}
            />
          </div>

          <div
            className={`xl:w-[560px] flex flex-col gap-[16px] md:gap-[20px]`}
          >
            <div
              className={`w-full border border-[#E5E6EB] border-solid rounded-[16px] py-[20px] px-[16px] md:px-[60px] md:py-[40px]`}
            >
              <div
                className={`flex flex-col w-full gap-[12px] mb-[12px] md:flex-row md:justify-between md:items-center md:mb-[20px]`}
              >
                <p className={`text-[16px] md:text-[20px]`}>訂購人資料</p>
                <FormItem
                  field="orderUpdateFrequentTravelers"
                  className={`w-auto mb-0 ${auth ? "block" : "hidden"}`}
                >
                  <Checkbox value="訂購人資料" className={`p-0`}>
                    同步更新至會員中心_個人資料
                  </Checkbox>
                </FormItem>
              </div>

              <FormItem label="姓名" field="orderName">
                <Input placeholder="請填寫姓名" allowClear />
              </FormItem>

              <FormItem label="身分證或護照號碼" field="orderId">
                <Input placeholder="請填寫身分證或護照號碼" allowClear />
              </FormItem>

              <Form.Item label="電話" field="orderphone">
                <PhoneInput />
              </Form.Item>

              <FormItem label="Email" field="orderEmail" rules={email}>
                <Input placeholder="請輸入信箱" />
              </FormItem>
            </div>

            <PassengerDataFrom
              title={"取票人資料"}
              fieldName={"taker"}
              isRequired
            >
              <FormItem className={`md:flex md:justify-end`}>
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
                  className={`bg-[#F2F3F5] w-full py-[5px] text-[#4E5969] md:w-[88px] rounded-[2px]`}
                >
                  清空表單
                </button>
              </FormItem>
            </PassengerDataFrom>

            {Array.from({ length: passengerTicketTotal }).map(
              (_item, index) => (
                <PassengerDataFrom
                  key={index}
                  title={`搭乘人資料_${index + 1}`}
                  fieldName={`passenger${index + 1}`}
                >
                  <FormItem className={`md:flex md:justify-end`}>
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
                      className={`bg-[#F2F3F5] w-full py-[5px] text-[#4E5969] md:w-[88px] rounded-[2px]`}
                    >
                      清空表單
                    </button>
                  </FormItem>
                </PassengerDataFrom>
              )
            )}
          </div>
        </Form>
      </div>
    </>
  );
};

export default PassengerData;
