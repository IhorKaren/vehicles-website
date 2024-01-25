import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unreadCount: 0,
  showToasts: true,
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setUnreadCount: (state, action) => {
      state.unreadCount = action.payload;
    },
    enableToasts: (state) => {
      state.showToasts = true;
    },
    disableToasts: (state) => {
      state.showToasts = false;
    },
  },
});

export const { setUnreadCount, enableToasts, disableToasts } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
