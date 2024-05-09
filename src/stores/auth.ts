import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { isMember: false, isDialog:false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialCounterState,
  reducers: {
    isLogin(state) {
        state.isMember = !state.isMember;
    },
    dialogToggle(state) {
      state.isDialog = !state.isDialog
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
