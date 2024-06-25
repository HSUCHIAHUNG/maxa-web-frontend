import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { REMOVE_COOKIES } from "../utils/js-cookie";
import { LoginType } from "./type/AuthType";
// cookie
import { SET_COOKIES } from "../utils/js-cookie";

const initialCounterState = {
  isMember: false,
  guestDialog: false,
  accessToken: "",
  tempToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialCounterState,
  reducers: {
    // 登入
    login(state, action:PayloadAction<LoginType>) {
      state.isMember = true;
      state.accessToken = action.payload.token
      SET_COOKIES('MAXA', action.payload.token)
    },
    // 登出
    logout(state) {
      state.isMember = false;
      state.accessToken = "";
      state.tempToken = "";
      REMOVE_COOKIES("MAXA");
      REMOVE_COOKIES("tmp_session");
    },
    guestDialogToggle(state) {
      state.guestDialog = !state.guestDialog;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
