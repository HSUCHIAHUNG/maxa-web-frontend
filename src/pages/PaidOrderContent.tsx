import React, { useEffect, useRef, useState } from "react";
// router
import { useParams } from "react-router-dom";
// ui kit
import { Alert, Steps } from "@arco-design/web-react";
import Step from "@arco-design/web-react/es/Steps/step";
// 匯入組件
import OrderDetails from "../components/common/OrderDetails";
// 匯入圖片
import selectSeats from "../assets/images/memberCenter/selectSeats.png";
// 匯入型別
import { TravelDetails } from "../pages/MemberCenter/type.ts";
// dayjs
// import dayjs from "dayjs";
// json
import orderManagement from "../assets/API/orderManagement.json";

const OrderContent: React.FC = () => {
  // 動態路由參數
  const param = useParams();

  // 取得當前時間
  // const currentTime = dayjs().format("YYYY-MM-DD HH:mm:ss");

  // 產品資訊
  const [productDetail, setProductDetail] = useState<TravelDetails | null>(
    null
  );


  const orderDetailsRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);



  // 取得產品資訊
  useEffect(() => {
    const detail = orderManagement.find(
      (order: TravelDetails) => order.id === param.id
    );
    setProductDetail(detail || null);
  }, [param.id]);

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

  return (
    <>
      <Alert
        type="info"
        showIcon={false}
        content={
          <div className={`flex gap-[8px] items-center justify-center`}>
            <span className="icon-[majesticons--alert-circle] text-[#3A57E8] "></span>
            <p>已付款</p>
          </div>
        }
        className={` justify-center`}
      />

      {/* 滾動-產品價格內容 */}
      <div
        className={
          isSticky
            ? "sticky flex justify-between items-center top-0 bg-[#fff] w-full z-[100] shadow-md h-[52px] px-[12px] md:px-[20px] duration-300 transition-all"
            : " h-0 overflow-hidden"
        }
      >
        <p>{productDetail?.name}</p>
        <span>商品合計 NT$ {productDetail?.amount}</span>
      </div>

      {/* 主內容 */}
      <div className={` max-w-[1040px] m-[0_auto] md:px-[24px] xl:px-0 `}>
        <div
          className={`flex !w-full flex-col gap-[16px] mb-[20px] md:my-[20px] md:gap-[20px] md:w-[560px] xl:flex-row-reverse xl:w-[900px] `}
        >
          {/* 訂單明細 */}
          <div ref={orderDetailsRef}>
            <OrderDetails
              // buttonState={title}
              title={false}
              name={productDetail?.name}
              ticket={productDetail?.ticket}
              amount={productDetail?.amount}
              paymentState={1}
              // paymentDescription={`已付款`}
              className={`border-b rounded-none md:border md:border-solid md:border-[#E5E6EB] md:rounded-[8px] `}
            ></OrderDetails>
          </div>

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

                {/* 訂購時間 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px] pb-[8px] `}>訂購時間</p>
                  </div>
                  <div className={`md:py-[9px] md:px-[20px] md:w-full`}>
                    {productDetail?.orderDate + " 10:00" ?? "2024-07-20 10:00"}
                  </div>
                </div>

                {/* 備註 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px] pb-[8px] `}>備註</p>
                  </div>
                  <div className={`md:py-[9px] md:px-[20px] md:w-full`}>
                    -----
                  </div>
                </div>
              </li>
            </ul>

            {/* 付款資料 */}
            <ul
              className={`bg-[#fff] w-full border-y border-solid border-[#E5E6EB] py-[20px] px-[16px] flex flex-col gap-[12px] md:gap-[20px] md:border md:rounded-[16px] md:p-[40px] `}
            >
              <li className={`text-[20px] `}>付款資料</li>
              <li
                className={`border border-solid border-[#E5E6EB] rounded-[4px] md:rounded-[8px] overflow-hidden`}
              >
                {/* 付款方式 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px]`}>付款方式</p>
                  </div>
                  <div
                    className={`md:py-[9px] md:px-[20px] md:w-full  md:border-b md:border-solid md:border-[#E5E6EB]`}
                  >
                    <p className={``}>{"信用卡"}</p>
                  </div>
                </div>

                {/* 信用卡卡號 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px]`}>信用卡卡號</p>
                  </div>
                  <div
                    className={`md:py-[9px] md:px-[20px] md:w-full  md:border-b md:border-solid md:border-[#E5E6EB]`}
                  >
                    <p className={``}>510540**2468</p>
                  </div>
                </div>

                {/* 授權碼 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px]`}>授權碼</p>
                  </div>
                  <div
                    className={`md:py-[9px] md:px-[20px] md:w-full  md:border-b md:border-solid md:border-[#E5E6EB]`}
                  >
                    <p className={``}>666</p>
                  </div>
                </div>

                {/* 交易流程 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px]`}>交易流程</p>
                  </div>
                  <div
                    className={`md:py-[9px] md:px-[20px] md:w-full  md:border-b md:border-solid md:border-[#E5E6EB]`}
                  >
                    <Steps
                      type="dot"
                      direction="vertical"
                      current={7}
                      style={{ maxWidth: 780 }}
                    >
                      <Step
                        title={`付款時間`}
                        description={`2024-12-12 12:12:12`}
                      />
                      <Step
                        title={`驗證支付`}
                        description={`2024-12-12 12:12:12`}
                      />
                      <Step
                        title={`提交交易`}
                        description={`2024-12-12 12:12:12`}
                      />
                      <Step
                        title={`提交授權申請`}
                        description={`2024-12-12 12:12:12`}
                      />
                      <Step
                        title={`獲得授權`}
                        description={`2024-12-12 12:12:12`}
                      />
                      <Step
                        title={`向商戶付款`}
                        description={`2024-12-12 12:12:12`}
                      />
                    </Steps>
                  </div>
                </div>

                {/* 退款 */}
                <div
                  className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
                >
                  <div
                    className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
                  >
                    <p className={`w-[112px]`}>退款</p>
                  </div>
                  <button
                    className={`  px-[16px] py-[2px] w-fit text-[#4E5969] bg-[#F2F3F5] md:py-[5px]  md:my-[9px] md:mx-[20px] `}
                  >
                    申請退款
                  </button>
                </div>

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
                    <p className={`w-[112px]`}>備註</p>
                  </div>
                  <div
                    className={`md:py-[9px] md:px-[20px] md:w-full  md:border-b md:border-solid md:border-[#E5E6EB]`}
                  >
                    <p className={``}>------</p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderContent;
