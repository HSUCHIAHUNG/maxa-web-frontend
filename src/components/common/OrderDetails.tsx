import React from "react";

interface OrderDetailsProps {
  title?: boolean;
  buttonState?: string;
  className?: string;
  name?: string;
  amount?: number;
  paymentState?: number;
  ticket?: {
    adult: number;
    child: number;
    old: number;
  };
  totalTicketType?: { type: string; total: number }[];
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
  title = true,
  name,
  className,
  ticket,
  amount,
  paymentState,
  totalTicketType = [],
  buttonState = "",
}) => {
  // 是否預定流程並計算總票數
  const isOpen = totalTicketType.every((item) => item === undefined);

  // 票種&票數
  function ticketName(type: string) {
    if (type === "adult") return "成人票";
    if (type === "child") return "兒童票";
    if (type === "old") return "敬老票";
  }

  return (
    <div
      className={`${className} overflow-hidden border border-solid border-[#E5E6EB] rounded-[8px] w-[100%] xl:h-fit xl:w-[320px]`}
    >
      {title && (
        <div className={`flex justify-between py-[11px] px-[16px]`}>
          <p>預約日期</p>
          <p>2024-04-21</p>
        </div>
      )}
      <img
        src={
          "https://www.funtime.com.tw/blog/wp-content/uploads/2020/08/guide-to-taoyuan-daxi2.jpg"
        }
        alt={"productDetail"}
        className=" w-[100%] object-cover h-[200px]"
      />
      <div className="w-[100%] p-[16px] flex flex-col justify-between ">
        <div className={`pb-[20px] text-[24px]`}>{name}</div>
        {!isOpen && (
          <>
            {totalTicketType.map((item) => (
              <div key={item.type}>
                {item !== undefined && (
                  <div className={`flex justify-between `}>
                    <p>
                      {ticketName(item.type)}*{item.total}
                    </p>
                    <p>NT$ 399*{item.total}</p>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
        {isOpen && ticket !== undefined && (
          <div className={`flex flex-col gap-[4px] justify-between`}>
            {/* 成人票 */}
            {ticket.adult ? (
              <div className={`flex justify-between `}>
                <p>{ticket.adult > 0 && `成人票*${ticket.adult}`}</p>
                <p>NT$ 399*{ticket.adult}</p>
              </div>
            ) : (
              ""
            )}

            {/* 兒童票 */}
            {ticket.child ? (
              <div className={`flex justify-between `}>
                <p>{ticket.child > 0 && `兒童票*${ticket.child}`}</p>
                <p>NT$ 200*{ticket.adult}</p>
              </div>
            ) : (
              ""
            )}

            {/* 敬老票 */}
            {ticket.old ? (
              <div className={`flex justify-between `}>
                <p>{ticket.old > 0 && `敬老票*${ticket.old}`}</p>
                <p>NT$ 200*{ticket.adult}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
        <div
          className={`border-b border-solid border-[#E5E6EB] w-full my-[8px] `}
        ></div>
        <div className={`flex justify-between text-[20px]`}>
          <p>總金額</p>
          <p>NT${amount}</p>
        </div>

        {/* 以下按鈕相關 */}
        
        {/* 訂單管理-待付款 */}
        {paymentState === 0 && (
          <button
            className={`mt-[12px] px-[16px] py-[5px] w-full text-[#fff] bg-[#3A57E8] `}
          >
            前往付款
          </button>
        )}

        {/* 已付款 */}
        {buttonState === "pendingPayment" && (
          <button
            className={`mt-[12px] px-[16px] py-[5px] w-full text-[#fff] bg-[#3A57E8] `}
          >
            確認付款
          </button>
        )}

        {/* 已失效 */}
        {buttonState === "expired" && (
          <button
            className={`mt-[12px] px-[16px] py-[5px] w-full text-[#fff] bg-[#3A57E8] `}
          >
            再次預定
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
