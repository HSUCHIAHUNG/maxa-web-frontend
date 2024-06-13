// 原生方法
import React from "react";
// redux
import { RootState } from "../../stores/index";
import { useSelector } from "react-redux";
// router
import { useParams, useNavigate, Link } from "react-router-dom";

interface OrderDetailsProps {
  title?: boolean;
  // buttonState?: string;
  className?: string;
  name?: string;
  amount?: number;
  paymentState?: number;
  // paymentDescription?: string;
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
  // paymentDescription,
  totalTicketType = [],
  // buttonState = "",
}) => {
  // 動態路由參數
  const param = useParams();

  // 動態導航
  const navigate = useNavigate();

  // 是否預定流程並計算總票數
  const isOpen = totalTicketType.every((item) => item === undefined);

  // 票種&票數
  function ticketName(type: string) {
    if (type === "adult") return "成人票";
    if (type === "child") return "兒童票";
    if (type === "old") return "敬老票";
  }

  // 單程票or來回票
  const tabState = useSelector((state: RootState) => state.order.ticket);

  // 導向商品詳情頁
  const navigateOrderPage = (id: string) => {
    navigate(`/order/${id}`);
  };

  const passengerTicket = useSelector(
    (state: RootState) => state.order.bookingData.passengerTicket
  );

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
        {tabState === "roundTripTicket" ? <p>來回票</p> : <p>單程票</p>}
        {!isOpen && (
          <>
            {totalTicketType.map((item) => (
              <div key={item.type}>
                {item !== undefined && (
                  <div className={`flex justify-between `}>
                    {item.total > 0 && (
                      <>
                        <p>
                        {ticketName(item.type)}*{tabState === "roundTripTicket" ? item.total*2 : item.total}

                        </p>
                        { item.type === 'adult' && <p>NT$ 399*{tabState === "roundTripTicket" ? item.total*2 : item.total}</p>}
                        { item.type !== 'adult' && <p>NT$ 200*{tabState === "roundTripTicket" ? item.total*2 : item.total}</p>}
                      </>
                    )}
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
        {/* 下底線 */}
        <div
          className={`border-b border-solid border-[#E5E6EB] w-full my-[8px] `}
        ></div>
        {/*  */}
        <div className={`flex justify-between text-[20px]`}>
          <p>總金額</p>
          {(paymentState !== undefined && paymentState < 3) && <p>NT${amount}</p>}
          {(paymentState === 3 && tabState === "roundTripTicket") && <p>NT${totalAmount()*2}</p> }
          {(paymentState === 3 && tabState === 'oneWayTicket') && <p>NT${totalAmount()}</p> }
        </div>

        {/* 以下按鈕相關 */}

        {/* 預定-確認付款 */}
        {paymentState === 3 && (
          <button
            className={`mt-[12px] px-[16px] py-[5px] w-full text-[#fff] bg-[#3A57E8] `}
          >
            確認付款
          </button>
        )}

        {/* 訂單管理-待付款 */}
        {paymentState === 0 && (
          <Link
            to={`/creaditCard/${param.id}`}
            className={`mt-[12px] px-[16px] py-[5px] w-full text-[#fff] text-center bg-[#3A57E8] `}
          >
            前往付款
          </Link>
        )}
        
        {/* 訂單管理-已付款 */}
        {/* {paymentState === 1 && paymentDescription === "已付款" && (
          <button
            className={` ml-auto mt-[12px] px-[16px] py-[5px] w-fit text-[#4E5969] bg-[#F2F3F5] `}
          >
            申請退款
          </button>
        )} */}

        {/* 訂單管理-已失效 */}
        {typeof param.id === "string" && paymentState === 2 && (
          <button
            onClick={() => {
              if (param.id) {
                navigateOrderPage(param.id);
              }
            }}
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
