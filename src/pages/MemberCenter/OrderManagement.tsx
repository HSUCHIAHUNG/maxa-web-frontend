// react原生方法
import React, { useRef, useState } from "react";
// router
import { useNavigate } from "react-router-dom";
// css樣式
import "../../assets/OrderManagement.css";
// 匯入組件
import OrderItem from "../../components/memberCenter/orderManagement/OrderItem";
// 匯入型別
import { TravelDetails } from "./type";
// ui kit
import {
  Button,
  Modal,
  Tabs,
  Typography,
  DatePicker,
  Message,
} from "@arco-design/web-react";
// dayjs時間套件
import dayjs from "dayjs";
// json
import orderManagementList from "../../assets/API/orderManagement.json";

// ui kit
const TabPane = Tabs.TabPane;
const { RangePicker } = DatePicker;

// tab
const tabs = [
  {
    id: "1",
    name: "待付款",
  },
  {
    id: "2",
    name: "已付款",
  },
  {
    id: "3",
    name: "已失效",
  },
];

const OrderManagement: React.FC = () => {
  // 動態路由方法
  const navigate = useNavigate();

  // 待付款-取消訂單modal狀態
  const [deleteVisible, setDeleteVisible] = useState(false);

  // 待付款-取消訂單票券狀態
  const [orderTicket, setOrderTicket] = useState(orderManagementList);

  // 待付款-訂單票券選擇項目
  const selectTickit = useRef<TravelDetails>();

  // 待付款-取消訂單按鈕
  const deleteButton = (ticket: TravelDetails) => {
    selectTickit.current = ticket;
    setDeleteVisible(true);
  };

  // 待付款-取消訂單-確認
  const deleteSubmit = () => {
    setDeleteVisible(false);
    setOrderTicket((prevState) => {
      return prevState.filter((item) => item.id !== selectTickit?.current?.id);
    });
    Message.success("取消成功");
  };

  // 前往付款詳情頁
  const navigateOrderContent = (id: string) => {
    navigate(`/orderContent/${id}`);
  };

  // 日期篩選
  const datapickerVal = (dateString: string[], value: dayjs.Dayjs[]) => {
    console.log(dateString);
    console.log(value);
  };

  return (
    <>
      {/* 主頁 */}
      <div
        className={`px-[8px] border border-solid border-[#E5E6EB] bg-[#fff] rounded-[16px] md:p-[40px] xl:w-[800px] `}
      >
        <p className={`hidden text-[20px] pb-[20px] md:block `}>訂單管理</p>
        {/* tab切換 */}
        <Tabs
          defaultActiveTab="1"
          extra={
            <RangePicker
              className={`w-[240px] mt-[4px]`}
              onChange={datapickerVal}
              shortcuts={[
                {
                  text: "next 7 days",
                  value: () => [dayjs(), dayjs().add(1, "week")],
                },
                {
                  text: "next 30 days",
                  value: () => [dayjs(), dayjs().add(1, "month")],
                },
                {
                  text: "next 365 days",
                  value: () => [dayjs(), dayjs().add(1, "year")],
                },
              ]}
            />
          }
        >
          {tabs.map((tab) => (
            <TabPane key={tab.id} title={tab.name}>
              <Typography.Paragraph>
                {/* 訂單項目 */}
                {orderTicket.map((order) => (
                  <div key={order.id}>
                    {/* 待付款 */}
                    {tab.name === "待付款" && order.paymentState === 0 && (
                      <OrderItem
                        name={order.name}
                        imgUrl={order.imageUrl}
                        orderDate={order.orderDate}
                        amount={order.amount}
                        ticket={order.ticket}
                      >
                        <button
                          onClick={() => deleteButton(order)}
                          className={`px-[16px] py-[3px] text-[#4E5969] bg-[#F2F3F5] w-[35%] md:w-auto `}
                        >
                          取消訂單
                        </button>
                        <button
                          onClick={() => navigateOrderContent(order.id)}
                          className={`bg-[#3A57E8] text-[#fff] px-[16px] py-[3px] w-[65%] text-center md:w-auto `}
                        >
                          前往付款
                        </button>
                      </OrderItem>
                    )}

                    {/* 已付款 */}
                    {tab.name === "已付款" && order.paymentState === 1 && (
                      <OrderItem
                        name={order.name}
                        imgUrl={order.imageUrl}
                        orderDate={order.orderDate}
                        amount={order.amount}
                        paymentDescription={order.paymentDescription}
                        ticket={order.ticket}
                      >
                        <button
                          onClick={() => navigateOrderContent(order.id)}
                          className={`bg-[#3A57E8] text-[#fff] px-[16px] py-[3px] w-[65%] text-center md:w-auto `}
                        >
                          訂單詳情
                        </button>
                      </OrderItem>
                    )}

                    {/* 已失效 */}
                    {tab.name === "已失效" && order.paymentState === 2 && (
                      <OrderItem
                        name={order.name}
                        imgUrl={order.imageUrl}
                        orderDate={order.orderDate}
                        amount={order.amount}
                        paymentDescription={order.paymentDescription}
                        ticket={order.ticket}
                      >
                        <>
                          <button
                            onClick={() => navigateOrderContent(order.id)}
                            className={`px-[16px] py-[3px] text-[#4E5969] bg-[#F2F3F5] w-[35%] md:w-auto `}
                          >
                            訂單詳請
                          </button>
                          <button
                            className={`bg-[#3A57E8] text-[#fff] px-[16px] py-[3px] w-[65%] text-center md:w-auto `}
                          >
                            再次預定
                          </button>
                        </>
                      </OrderItem>
                    )}
                  </div>
                ))}

                {/* <Pagination className={`justify-center`} total={200} /> */}
              </Typography.Paragraph>
            </TabPane>
          ))}
        </Tabs>
      </div>

      {/* 待付款-取消訂單modal */}
      {deleteVisible === true && (
        <Modal
          title="是否確定要取消訂單??"
          visible={deleteVisible}
          onCancel={() => setDeleteVisible(false)}
          footer={
            <div className={` flex flex-col justify-end md:flex-row`}>
              <div className={`flex gap-[8px]`}>
                <div className={`flex gap-[8px]`}>
                  <Button
                    onClick={() => deleteSubmit()}
                    type="primary"
                    className={` w-full !bg-[#EC4A58]`}
                  >
                    確定
                  </Button>
                  <Button
                    onClick={() => setDeleteVisible(false)}
                    className={`w-full`}
                  >
                    取消
                  </Button>
                </div>
              </div>
            </div>
          }
          className={`w-[90%] md:w-[520px]`}
        >
          <p className={`pb-[4px]`}>
            提醒您，訂單取消後資料不會保存，需再次訂購。
          </p>
        </Modal>
      )}
    </>
  );
};

export default OrderManagement;
