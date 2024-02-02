import { RootState } from "../store";

export const isLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const isRefresh = (state: RootState) => state.auth.isRefreshing;

export const isLoading = (state: RootState) => state.auth.isLoading;

export const user = (state: RootState) => state.auth.user;

export const authError = (state: RootState) => state.auth.error;
