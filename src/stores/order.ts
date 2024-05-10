import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// selectTime階段
interface TimeDataType {
  id: string;
  startStation: string;
  endStation: string;
  seats: string;
  Vehicles: string;
}

// 票數、座位
interface PassengerTicketType {
  type: string
  total: number
}

// 儲存劃位資料
interface SeatDataType {
  id: number;
  type: string;
  name: string | null;
}

// 儲存劃位資料
interface SeatsData  {
  [key: string]: SeatDataType[];
}

// 儲存定單資料型別
interface BookingData {
  stationData: { [key: string]: object };
  timeData: { [key: string]: TimeDataType }; // 將 timeData 介面應用於 timeData 物件
  seatsData: SeatsData;
  passengerTicket: { [key: string]: PassengerTicketType };
}

// 訂單票種(單程票、來回票)
type ticketType = "oneWayTicket" | "roundTripTicket";

// 訂購階段( 選擇站點、時間、座位 )
type bookingStageType = "selectStation" | "selectTime" | "selectSeats";

const initialOrderState: {
  ticket: ticketType;
  bookingStage: bookingStageType;
  bookingData: BookingData;
} = {
  ticket: "oneWayTicket",
  bookingStage: "selectStation",
  bookingData: {
    stationData: {},
    timeData: {},
    passengerTicket: {},
    seatsData: {},
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    // 切換訂單票種(單程票、來回票)
    switchTab(state) {
      return {
        ...state,
        ticket:
          state.ticket === "oneWayTicket" ? "roundTripTicket" : "oneWayTicket",
        bookingStage: "selectStation",
      };
    },
    // 切換訂購階段
    switchStage(state, action: PayloadAction<bookingStageType>) {
      state.bookingStage = action.payload;
    },
    // 儲存搭車車站、日期
    setStationData(state, action: PayloadAction<[string, object]>) {
      const [keyToUpdate, newData] = action.payload;
      state.bookingData.stationData[keyToUpdate] = newData;
    },
    // 儲存搭車時間
    setTimeData(state, action: PayloadAction<[string, TimeDataType]>) {
      const [keyToUpdate, newData] = action.payload;
      state.bookingData.timeData[keyToUpdate] = newData;
    },
    // 儲存乘客數票數
    setPassengerTicket(state, action: PayloadAction<PassengerTicketType>) {
      const { type, total } = action.payload;
      state.bookingData.passengerTicket[type] = { type, total };
      // console.log(state.bookingData.passengerTicket);
    },
    // 儲存劃位資料
    setSeatsData(state, action: PayloadAction<[SeatDataType[], string]>) {
      const [newData, ticketType] = action.payload;
      state.bookingData.seatsData[ticketType] = newData;
      console.log(state.bookingData.seatsData[ticketType]);
    },
    // 重設bookingData
    reseBbookingData(state) {
      state.bookingData = initialOrderState.bookingData;
      state.bookingStage = "selectStation";
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
