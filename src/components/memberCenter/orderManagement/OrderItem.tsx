import React, { ReactNode } from "react";
// ui kit
import { Alert, Divider } from "@arco-design/web-react";


// redux
// import { useAppDispatch } from "../../../stores/index.ts";
// import { orderActions } from "../../../stores/order";
// router
// import { useNavigate } from "react-router-dom";
// 匯入型別
// import { OrderContentType } from "../../../stores/type/OrderType.ts";
// import { TravelDetails } from "../../../pages/MemberCenter/type.ts"

// 待付款票狀項目
// interface pendingPaymentType {
//   id: string;
//   name: string;
//   selected: boolean;
//   paymentState: string;
// }

// props型別
interface OrderItemPropsType {
  name: string;
  imgUrl: string;
  orderDate: string;
  amount: number;
  ticket: {
    adult: number;
    child: number;
    old: number;
  };
  paymentDescription?: string;
  PaymentDeadline?: string;
  children: ReactNode;
}

const OrderItem: React.FC<OrderItemPropsType> = ({
  name,
  imgUrl,
  orderDate,
  amount,
  ticket,
  paymentDescription = "",
  children,
}) => {
  // redux方法呼叫
  // const dispatch = useAppDispatch();
  // 動態路由方法
  // const navigate = useNavigate();

  // 待付款-取消訂單modal狀態
  // const [deleteVisible, setDeleteVisible] = useState(false);

  // 訂單票券選擇項目
  // const selectTickit = useRef<pendingPaymentType>();

  // 付款狀態樣式動態設定
  const paymentStateFilter = (paymentState: string) => {
    switch (paymentState) {
      case "付款截止時間":
        return (
          <Alert
            type="error"
            showIcon={false}
            content={
              <div className={`flex gap-[8px] `}>
                <p className={` `}>
                  付款截止時間:{" "}
                  <span className={`text-[#EC4A58]`}>2024-04-21 12:12:12</span>
                </p>
              </div>
            }
            className={` justify-center`}
          />
        );
      case "已付款":
        return <Alert type="info" content="已付款" />;
      case "申請退款中":
        return <Alert type="warning" content="申請退款中" />;
      case "已完成活動":
        return <Alert type="success" content="已完成活動" />;
      case "付款期限已截止":
        return (
          <Alert
            showIcon={false}
            content={
              <div className={`flex gap-[8px] items-center `}>
                <span className="icon-[majesticons--alert-circle] text-[#808EB0] "></span>
                <p>付款期限已截止</p>
              </div>
            }
            className={` justify-center bg-[#E5E6EB]`}
          />
        );
      default:
        break;
    }
  };

  return (
    <div
      className={`bg-[#fff] !mb-[12px] last:mb-0 border border-solid border-[#86909C rounded-[4px] md:!mb-[16px]`}
    >
      {/* 標題 */}
      <p className={`px-[12px] py-[8px] md:px-[20px] md:py-[12px]`}>{name}</p>

      {/* banner */}
      {paymentDescription.length > 0 && (
        <>{paymentStateFilter(paymentDescription)}</>
      )}

      {/* 訂單內容 */}
      <div className={`p-[12px] md:p-[16px] xl:p-[20px] `}>
        <div className={`md:flex gap-[16px]`}>
          <img
            src={imgUrl}
            alt="圖"
            className={`w-full h-[96px] md:w-[160px] object-cover`}
          />
          <div className={`pt-[8px]`}>
            <div className={`pb-[8px] text-[14px]`}>
              <p>{`訂單時間 : ${orderDate}`}</p>
              <p>{ticket.adult > 0 && `成人票*${ticket.adult}`}</p>
              <p>{ticket.child > 0 && `兒童票*${ticket.child}`}</p>
              <p>{ticket.old > 0 && `敬老票*${ticket.old}`}</p>
            </div>
          </div>
        </div>
        <p className={`text-[20px] text-right `}>{`NT$ ${amount}`}</p>
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
        {children}
      </div>
    </div>
  );
};

export default OrderItem;
