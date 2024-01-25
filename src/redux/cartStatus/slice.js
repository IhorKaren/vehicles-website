import { createSlice } from "@reduxjs/toolkit";

const userCartSlice = createSlice({
  name: "cartStatus",
  initialState: {
    isOpen: false,
    isHidden: false,
  },
  reducers: {
    openUserCart: (state) => {
      state.isOpen = true;
    },
    closeUserCart: (state) => {
      state.isOpen = false;
    },
    hideUserCart: (state) => {
      state.isHidden = true;
    },
    showUserCart: (state) => {
      state.isHidden = false;
    },
  },
});

export const { openUserCart, closeUserCart, hideUserCart, showUserCart } =
  userCartSlice.actions;
export default userCartSlice.reducer;
