import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { register, login, refreshUser, logOut } from "./operations";

import { State } from "../../App.types";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

const initialState: State = {
  user: {
    firstName: "",
    lastName: "",
    accountType: "",
    membership: "",
    email: "",
  },
  token: "",
  error: false,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = {
          firstName: payload.firstName,
          lastName: payload.lastName,
          accountType: payload.accountType,
          membership: payload.membership,
          email: payload.email,
        };
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          firstName: "",
          lastName: "",
          accountType: "",
          membership: "",
          email: "",
        };
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const { clearError } = authSlice.actions;

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
