// react原生方法
import React, { useRef, useState } from "react";
// redux
import { useAppDispatch } from "../../stores/index.ts";
import { orderActions } from "../../stores/order";
// router
import { useNavigate } from "react-router-dom";
// css樣式
import "../../assets/OrderManagement.css";
// ui kit
import {
  Alert,
  Button,
  Divider,
  Message,
  Modal,
  // Pagination,
  Tabs,
  Typography,
} from "@arco-design/web-react";
import { DatePicker } from "@arco-design/web-react";
import dayjs from "dayjs";
// 匯入型別
import { OrderContentType } from "src/stores/type/OrderType.ts";


// 待付款票狀項目
interface pendingPaymentType {
  id: string;
  name: string;
  selected: boolean;
  paymentState: string;
}

const TabPane = Tabs.TabPane;
const { RangePicker } = DatePicker;

const OrderManagement: React.FC = () => {
  // 待付款-取消訂單modal狀態
  const [deleteVisible, setDeleteVisible] = useState(false);

  // 待付款-取消訂單票券狀態
  const [orderTicket, setOrderTicket] = useState([
    {
      id: "1",
      name: "格上租車券+阿里山門票+奮起湖經典三大美食",
      selected: false,
      paymentState: "已付款，等待使用",
    },
    {
      id: "2",
      name: "格上租車券+阿里山門票+奮起湖經典三大美食",
      selected: false,
      paymentState: "申請退款中",
    },
    {
      id: "3",
      name: "格上租車券+阿里山門票+奮起湖經典三大美食",
      selected: false,
      paymentState: "已完成活動",
    },
  ]);

  // 訂單票券選擇項目
  const selectTickit = useRef<pendingPaymentType>();

  // 待付款-付款倒數時間預設1小時3600秒
  // const [remainingTime, setRemainingTime] = useState(3600);

  // 付款商品頁顯示狀態
  // const orderContent = useSelector(
  //   (state: RootState) => state.order.orderContent
  // );
  // const { title } = orderContent;

  // redux方法呼叫
  const dispatch = useAppDispatch();

  // 動態路由方法
  const navigate = useNavigate();

  // 日期篩選
  const datapickerVal = (dateString: string[], value: dayjs.Dayjs[]) => {
    console.log(dateString);
    console.log(value);
  };

  // 待付款-取消訂單按鈕
  const deleteButton = (ticket: pendingPaymentType) => {
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

  // 待付款-如果狀態是待付款就啟用倒數計時器
  // useEffect(() => {
  //   if (title !== "pendingPayment") return;
  //   const timer = setInterval(() => {
  //     setRemainingTime((prevTime) => {
  //       if (prevTime === 0) {
  //         clearInterval(timer);
  //         return 0;
  //       } else {
  //         return prevTime - 1;
  //       }
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [title]);

  // 待付款-將付款剩餘時間轉成時分秒
  // const formatTime = (time: number): string => {
  //   const hours = Math.floor(time / 3600);
  //   const minutes = Math.floor((time % 3600) / 60);
  //   const seconds = time % 60;
  //   return `${hours.toString().padStart(2, "0")}:${minutes
  //     .toString()
  //     .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  // };

  // 付款狀態樣式動態設定
  const paymentStateFilter = (paymentState: string) => {
    switch (paymentState) {
      case "已付款，等待使用":
        return <Alert type="info" content="已付款，等待使用" />;
      case "申請退款中":
        return <Alert type="warning" content="申請退款中" />;
      case "已完成活動":
        return <Alert type="success" content="已完成活動" />;
      default:
        break;
    }
  };

  // 前往付款詳情頁
  const navigateOrderContent = (
    type: Pick<OrderContentType, 'title'>['title'],
    time?: number
  ) => {
    dispatch(
      orderActions.orderContentStateChenge({
        title: type,
        remainingTime: time,
      })
    );

    navigate("/orderContent");
  };

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
          {tabs.map((tabs) => (
            <TabPane key={tabs.id} title={tabs.name}>
              <Typography.Paragraph>
                {orderTicket.map((item) => (
                  <div
                    key={item.id}
                    className={`bg-[#fff] mb-[12px] last:mb-0 border border-solid border-[#86909C rounded-[4px]`}
                  >
                    {/* 標題 */}
                    <p
                      className={`px-[12px] py-[8px] md:px-[20px] md:py-[12px]`}
                    >
                      {item.name}
                    </p>

                    {/* 待付款 */}
                    {/* {tabs.name === "待付款" && (
                      <Alert
                        type="error"
                        content={`付款剩餘時間：${formatTime(remainingTime)}`}
                        className={`p-[8px] !bg-[##EC4A58] `}
                      />
                    )} */}

                    {/* 已付款 */}
                    {tabs.name === "已付款" &&
                      paymentStateFilter(item.paymentState)}

                    {/* 已失效 */}
                    {tabs.name === "已失效" && (
                      <div className={`h-[40px] bg-[#E5E6EB] text-[#86909C] py[8px] px-[15px]`}>
                        <p className={`text-[14px] leading-[40px]`}>付款期限已截止</p>
                      </div>
                    )}

                    {/* 訂單內容 */}
                    <div className={`p-[12px] md:p-[16px] xl:p-[20px] `}>
                      <div className={`md:flex gap-[16px]`}>
                        <img
                          src="https://i0.wp.com/1.bp.blogspot.com/-ToGcRVlOmPg/XmYJezmrwYI/AAAAAAAAFGQ/27636S3TFK8eJnvVyz8KasDLmUh3a5txwCLcBGAsYHQ/s1600/04.%25E8%2598%2587%25E7%25BE%258E%25E5%25B3%25B6.jpg?ssl=1"
                          alt="圖"
                          className={`w-full h-[96px] md:w-[160px] object-cover`}
                        />
                        <div className={`pt-[8px]`}>
                          <div className={`pb-[8px] text-[14px]`}>
                            <p>訂單時間 : 2024-04-21</p>
                            <p>成人票*1</p>
                            <p>敬老票*2</p>
                          </div>
                        </div>
                      </div>
                      <p className={`text-[20px] text-right `}>NT$ 1,100</p>
                    </div>
                    <Divider
                      className={`bg-[#F2F3F5] m-0`}
                      style={{
                        borderBottomWidth: 2,
                        borderBottomStyle: "dashed",
                      }}
                    />

                    {/* 以下為按鈕顯示狀態 */}
                    <div
                      className={`flex gap-[8px] p-[12px] md:justify-end md:px-[16px] md:py-[11px]`}
                    >
                      {/* 待付款 */}
                      {tabs.name === "待付款" && (
                        <>
                          <button
                            onClick={() => deleteButton(item)}
                            className={`px-[16px] py-[3px] text-[#4E5969] bg-[#F2F3F5] w-[35%] md:w-auto `}
                          >
                            取消訂單
                          </button>
                          <button
                            onClick={() =>
                              navigateOrderContent("pendingPayment", 3600)
                            }
                            className={`bg-[#3A57E8] text-[#fff] px-[16px] py-[3px] w-[65%] text-center md:w-auto `}
                          >
                            前往付款
                          </button>
                        </>
                      )}

                      {/* 已付款 */}
                      {tabs.name === "已付款" && (
                        <button
                          onClick={() =>
                            navigateOrderContent(
                              "alreadyPaid"
                            )
                          }
                          className={`bg-[#3A57E8] text-[#fff] px-[16px] py-[3px] w-[65%] text-center md:w-auto `}
                        >
                          訂單詳情
                        </button>
                      )}

                      {/* 已失效 */}
                      {tabs.name === "已失效" && (
                        <>
                          <button
                            onClick={() =>
                              navigateOrderContent("expired")
                            }
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
                      )}
                    </div>
                  </div>
                ))}
                {/* <Pagination className={`justify-center`} total={200} /> */}
              </Typography.Paragraph>
            </TabPane>
          ))}
        </Tabs>
      </div>
      {/* 取消訂單modal */}
      {deleteVisible === true && (
        <Modal
          title="是否確定要取消訂單??"
          visible={deleteVisible}
          onCancel={() => setDeleteVisible(false)}
          footer={
            <div className={` flex flex-col justify-end md:flex-row`}>
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
