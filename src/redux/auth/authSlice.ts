import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { registerUser, logIn, refreshUser, logOut } from "./operations";

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
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
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
      .addCase(logIn.rejected, (state) => {
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
