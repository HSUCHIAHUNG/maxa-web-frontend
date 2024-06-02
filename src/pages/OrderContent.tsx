import React, { useEffect, useState } from "react";
// router
import { useParams } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
import { RootState } from "../stores/index.ts";
// ui kit
import { Alert, Steps } from "@arco-design/web-react";
import Step from "@arco-design/web-react/es/Steps/step";
// 匯入組件
import OrderDetails from "../components/common/OrderDetails";
// 匯入圖片
import selectSeats from "../assets/images/memberCenter/selectSeats.png";
// 匯入型別
import { TravelDetails } from "../pages/MemberCenter/type.ts";
// json
import orderManagement from "../assets/API/orderManagement.json";

const OrderContent: React.FC = () => {
  // 動態路由參數
  const param = useParams();

  // 倒數計時器狀態
  // const [remainingTime, setRemainingTime] = useState(3600);

  // 全域狀態orderContent
  const orderContent = useSelector(
    (state: RootState) => state.order.orderContent
  );
  const { title } = orderContent;

  // 產品資訊
  const [productDetail, setProductDetail] = useState<TravelDetails | null>(
    null
  );

  // 取得產品資訊
  useEffect(() => {
    const detail = orderManagement.find(
      (order: TravelDetails) => order.id === param.id
    );
    setProductDetail(detail || null);
  }, [param.id]);

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
  // const paymentStateFilter = () => {
  //   switch (title) {
  //     case "alreadyPaid":
  //       return <Alert type="info" content="已付款，等待使用" />;
  //     // case "申請退款中":
  //     //   return <Alert type="warning" content="申請退款中" />;
  //     case "expired":
  //       return <Alert type="success" content="已完成活動" />;
  //     default:
  //       return <></>;
  //   }
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

  return (
    <>
      {/* 待付款 */}
      {productDetail?.paymentDescription && (
        paymentStateFilter(productDetail?.paymentDescription)
      )}

      {/* 主內容 */}
      <div className={` max-w-[1040px] m-[0_auto] md:px-[24px] xl:px-0 `}>
        <div
          className={`flex !w-full flex-col gap-[16px] mb-[20px] md:my-[20px] md:gap-[20px] md:w-[560px] xl:flex-row-reverse xl:w-[900px] `}
        >
          {/* 訂單明細 */}
          <OrderDetails
            buttonState={title}
            title={false}
            name={productDetail?.name}
            ticket={productDetail?.ticket}
            amount={productDetail?.amount}
            paymentState={productDetail?.paymentState}
            className={`border-b rounded-none md:border md:border-solid md:border-[#E5E6EB] md:rounded-[8px] `}
          ></OrderDetails>

          {/* 訂單詳情表格內容 */}
          <div
            className={` flex flex-col gap-[16px] md:gap-[20px] xl:w-[700px]`}
          >
            {/* 訂單詳情 */}
            <ul
              className={`bg-[#fff] w-full border-y border-solid border-[#E5E6EB] py-[20px] px-[16px] flex flex-col gap-[12px] md:gap-[20px] md:border md:rounded-[16px] md:p-[40px] `}
            >
              <li className={`text-[20px] `}>訂單詳情</li>
              <li
                className={`border border-solid border-[#E5E6EB] rounded-[4px] md:rounded-[8px] overflow-hidden`}
              >
                {/* 訂單編號 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px]`}>訂單編號</p>
                  </div>
                  <div
                    className={`md:py-[9px] md:px-[20px] md:w-full  md:border-b md:border-solid md:border-[#E5E6EB]`}
                  >
                    <p className={``}>{param.id}</p>
                  </div>
                </div>

                {/* 去程時間 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px] pb-[8px] `}>去程時間</p>
                  </div>
                  <div className={`md:py-[9px] md:px-[20px] md:w-full`}>
                    2024-05-20 10:00
                  </div>
                </div>

                {/* 回程時間 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px] pb-[8px] `}>回程時間</p>
                  </div>
                  <div className={`md:py-[9px] md:px-[20px] md:w-full`}>
                    2024-05-21 20:00
                  </div>
                </div>

                {/* 訂單流程 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px] pb-[8px] `}>訂單流程</p>
                  </div>
                  <div className={`md:py-[9px] md:px-[20px] md:w-full`}>
                    <Steps
                      type="dot"
                      direction="vertical"
                      current={1}
                      style={{ maxWidth: 780 }}
                    >
                      <Step
                        title="訂購時間"
                        description={productDetail?.orderDate}
                      />
                      <Step title="等待使用" description="------" />
                    </Steps>
                  </div>
                </div>
              </li>
            </ul>

            {/* 車票相關 */}
            <ul
              className={`bg-[#fff] w-full border-y border-solid border-[#E5E6EB] py-[20px] px-[16px] flex flex-col gap-[12px] md:gap-[20px] md:border md:rounded-[16px] md:p-[40px] `}
            >
              <li className={` text-[20px] `}>車票相關</li>
              <li
                className={`border border-solid border-[#E5E6EB] rounded-[4px] md:rounded-[8px] overflow-hidden`}
              >
                {/* 預定班次 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px]`}>預定班次</p>
                  </div>
                  <div
                    className={`md:py-[9px] md:px-[20px] md:w-full  md:border-b md:border-solid md:border-[#E5E6EB]`}
                  >
                    <p className={``}>0001</p>
                  </div>
                </div>

                {/* 座位 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px] `}>座位</p>
                  </div>
                  <div
                    className={`flex justify-center md:py-[9px] md:px-[20px] md:w-full`}
                  >
                    <img src={selectSeats} alt="座位" />
                  </div>
                </div>
              </li>
            </ul>

            {/* 收據資料 */}
            <ul
              className={`bg-[#fff] w-full border-y border-solid border-[#E5E6EB] py-[20px] px-[16px] flex flex-col gap-[12px] md:gap-[20px] md:border md:rounded-[16px] md:p-[40px] `}
            >
              <li className={` text-[20px] `}>收據資料</li>
              <li
                className={`border border-solid border-[#E5E6EB] rounded-[4px] md:rounded-[8px] overflow-hidden`}
              >
                {/* 繳款人統編或ID */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px]`}>繳款人統編或ID</p>
                  </div>
                  <div
                    className={`md:py-[9px] md:px-[20px] md:w-full  md:border-b md:border-solid md:border-[#E5E6EB]`}
                  >
                    <p className={``}>------</p>
                  </div>
                </div>
                {/* 備註 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px] `}>備註</p>
                  </div>
                  <div className={` md:py-[9px] md:px-[20px] md:w-full`}>
                    <p className={``}>------</p>
                  </div>
                </div>
              </li>
            </ul>

            {/* 付款資料 */}
            <ul
              className={`bg-[#fff] w-full border-y border-solid border-[#E5E6EB] py-[20px] px-[16px] flex flex-col gap-[12px] md:gap-[20px] md:border md:rounded-[16px] md:p-[40px] `}
            >
              <li className={` text-[20px] `}>付款資料</li>
              <li
                className={`border border-solid border-[#E5E6EB] rounded-[4px] md:rounded-[8px] overflow-hidden`}
              >
                {/* 繳款人統編或ID */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px]`}>信用卡卡號</p>
                  </div>
                  <div className={`md:py-[9px] md:px-[20px] md:w-full `}>
                    <p className={``}>510******468</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderContent;
