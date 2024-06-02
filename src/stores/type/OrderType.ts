// 訂單票種(單程票、來回票)
export type TicketType = "oneWayTicket" | "roundTripTicket";

// 訂購階段( 選擇站點、時間、座位 )
export type BookingStageType =
  | "selectStation"
  | "selectTime"
  | "selectSeats"
  | "passengerData"
  | "contract";
  

// 訂單詳情
export type OrderContentType = {
  paymentState?: string;
  title: "pendingPayment" | "reserve" | "orderHistory" | "CheckoutDetails" | "alreadyPaid" | "expired";
  industryName?: string;
  routeName?: string;
  remarks?: string;
  totalAmount?: number | string;
  paymentMethod?: string;
  orderNumber?: string
  remainingTime?: number
};

// 訂單詳情-付款狀態(paymentState)
export type paymentStateType =
  | "pendingPayment"
  | "alreadyPaid"
  | "expired"
  | "refund"
  | "activeComplate"

// 訂單資料
export interface BookingData {
  stationData: StationDataType;
  timeData: { [key in TimeDataKey]: TimeDataType };
  passengerTicket: { [key in PassengerTicketKey]: PassengerTicketType };
  seatsData: SeatsData;
}

// 訂單資料-起訖站、訂車日期(stationData)
export interface StationDataType {
  endStation: string;
  startDate: string;
  startStation: string;
}

// 訂單資料-selectTime階段key
export type TimeDataKey = "startTime" | "endTime";

// 訂單資料-selectTime階段
export interface TimeDataType {
  id: string;
  startStation: string;
  endStation: string;
  seats: string;
  Vehicles: string;
}

// 訂單資料-票數(成人、兒童、敬老)key
export type PassengerTicketKey = "adult" | "child" | "old";

// 訂單資料-票數(成人、兒童、敬老)、座位
export interface PassengerTicketType {
  type: PassengerTicketKey;
  total: number;
}

// 訂單資料-劃位資料
export interface SeatsData {
  oneWayTicket: SeatDataType[];
  roundTripTicket: SeatDataType[];
}

// 訂單資料-劃位資料
export interface SeatDataType {
  id: number;
  type: string;
  name: string | null;
}
