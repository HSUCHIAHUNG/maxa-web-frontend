import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/orderManagement.css";
import OrderItem from "../../components/memberCenter/orderManagement/OrderItem";
import { TravelDetails } from "./type";
import {
  Button,
  Modal,
  Tabs,
  Typography,
  DatePicker,
  Message,
} from "@arco-design/web-react";
import dayjs, { Dayjs } from "dayjs";
import orderManagementList from "../../assets/API/orderManagement.json";

const TabPane = Tabs.TabPane;

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
  const navigate = useNavigate();
  const [deleteVisible, setDeleteVisible] = useState<boolean>(false);
  const [orderTicket, setOrderTicket] =
    useState<TravelDetails[]>(orderManagementList);
  const selectTickit = useRef<TravelDetails | null>(null);

  // 設置預設日期區間為本日前三個月到今天
  const [startDate, setStartDate] = useState<Dayjs | null>(
    dayjs().subtract(3, "month")
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());

  const filterOrdersByDate = (orders: TravelDetails[]): TravelDetails[] => {
    if (!startDate && !endDate) return orders;
    return orders.filter((order) => {
      const orderDate = dayjs(order.orderDate);
      if (startDate && endDate) {
        return (
          orderDate.isSame(startDate, "day") ||
          orderDate.isSame(endDate, "day") ||
          (orderDate.isAfter(startDate) && orderDate.isBefore(endDate))
        );
      } else if (startDate) {
        return (
          orderDate.isSame(startDate, "day") || orderDate.isAfter(startDate)
        );
      } else if (endDate) {
        return orderDate.isSame(endDate, "day") || orderDate.isBefore(endDate);
      }
      return true;
    });
  };

  const deleteButton = (ticket: TravelDetails) => {
    selectTickit.current = ticket;
    setDeleteVisible(true);
  };

  const deleteSubmit = () => {
    setDeleteVisible(false);
    setOrderTicket((prevState) => {
      return prevState.filter((item) => item.id !== selectTickit.current?.id);
    });
    Message.success("取消成功");
  };

  const navigateOrderContent = (id: string) => {
    navigate(`/orderContent/${id}`);
  };

  const navigateOrderPage = (id: string) => {
    navigate(`/order/${id}`);
  };

  const handleStartDateChange = (_dateString: string, date: Dayjs) => {
    setStartDate(date);
    setEndDate(null); // 清空結束日期
  };

  const handleEndDateChange = (_dateString: string, date: Dayjs) => {
    setEndDate(date);
  };

  const disabledEndDate = (current: Dayjs) => {
    return startDate ? current.isBefore(startDate, "day") : false;
  };

  return (
    <>
      <div className=" orderManagementTab border border-solid border-[#E5E6EB] bg-[#fff] md:rounded-[16px] md:p-[40px] xl:w-[800px]">
        <p className="hidden text-[20px] pb-[20px] md:block">訂單管理</p>
        <Tabs
          defaultActiveTab="1"
          extra={
            <div className="flex gap-[4px]">
              <DatePicker
                position="br"
                placeholder="起始日期"
                className="w-[134px]"
                value={startDate?.toDate()}
                onChange={handleStartDateChange}
              />
              <div className="flex justify-center items-center bg-[#F2F3F5] w-[32px] h-[32px]">
                <span className="icon-[solar--arrow-right-outline] text-[#4E5969]"></span>
              </div>
              <DatePicker
                position="br"
                placeholder="結束日期"
                className="w-[134px]"
                value={endDate?.toDate()}
                onChange={handleEndDateChange}
                disabledDate={disabledEndDate}
                disabled={!startDate}
              />
            </div>
          }
        >
          {tabs.map((tab) => (
            <TabPane
              key={tab.id}
              title={tab.name}
              className="p-[8px] md:p-[20px] bg-[#f2f3f5]"
            >
              <Typography.Paragraph>
                {filterOrdersByDate(orderTicket).map((order) => (
                  <div key={order.id}>
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
                          className="px-[16px] py-[3px] text-[#4E5969] bg-[#F2F3F5] w-[35%] md:w-auto"
                        >
                          取消訂單
                        </button>
                        <button
                          onClick={() => navigateOrderContent(order.id)}
                          className="bg-[#3A57E8] text-[#fff] px-[16px] py-[3px] w-[65%] text-center md:w-auto"
                        >
                          前往付款
                        </button>
                      </OrderItem>
                    )}
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
                          className="bg-[#3A57E8] text-[#fff] px-[16px] py-[3px] w-[65%] text-center md:w-auto"
                        >
                          訂單詳情
                        </button>
                      </OrderItem>
                    )}
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
                            className="px-[16px] py-[3px] text-[#4E5969] bg-[#F2F3F5] w-[35%] md:w-auto"
                          >
                            訂單詳請
                          </button>
                          <button
                            onClick={() => navigateOrderPage(order.id)}
                            className="bg-[#3A57E8] text-[#fff] px-[16px] py-[3px] w-[65%] text-center md:w-auto"
                          >
                            再次預定
                          </button>
                        </>
                      </OrderItem>
                    )}
                  </div>
                ))}
              </Typography.Paragraph>
            </TabPane>
          ))}
        </Tabs>
      </div>

      {deleteVisible === true && (
        <Modal
          title="是否確定要取消訂單??"
          visible={deleteVisible}
          onCancel={() => setDeleteVisible(false)}
          footer={
            <div className="flex flex-col justify-end md:flex-row">
              <div className="flex gap-[8px]">
                <Button
                  onClick={() => deleteSubmit()}
                  type="primary"
                  className="w-full !bg-[#EC4A58]"
                >
                  確定
                </Button>
                <Button
                  onClick={() => setDeleteVisible(false)}
                  className="w-full"
                >
                  取消
                </Button>
              </div>
            </div>
          }
          className="w-[90%] md:w-[520px]"
        >
          <p className="pb-[4px]">
            提醒您，訂單取消後資料不會保存，需再次訂購。
          </p>
        </Modal>
      )}
    </>
  );
};

export default OrderManagement;
