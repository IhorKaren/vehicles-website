import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, signIn, signOut, signUp } from "./operations";

const initialState = {
  isAuth: false,
  user: null,
  roles: [],
  isLoading: false,
  error: {},
};

// Сommon handler function for recording user data
const handleEnterToSystem = (state, action) => {
  const { user } = action.payload;
  state.isAuth = true;
  state.isLoading = false;
  state.error = null;
  state.user = user;
  state.roles = user.roles.map((role) => role.name);
};

// Common handler function for recording error message and status code
const handleErrorCase = (state, action) => {
  state.isLoading = false;
  state.error.message = action.payload.message;
  state.error.statusCode = action.payload.statusCode || 500;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // sign in
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        handleEnterToSystem(state, action);
      })
      .addCase(signIn.rejected, (state, action) => {
        handleErrorCase(state, action);
      })
      // sign out
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOut.fulfilled, () => {
        localStorage.removeItem("token");
        return {
          ...initialState,
        };
      })
      .addCase(signOut.rejected, (state, action) => {
        handleErrorCase(state, action);
      })
      // sign up
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        handleEnterToSystem(state, action);
      })
      .addCase(signUp.rejected, (state, action) => {
        handleErrorCase(state, action);
      })
      // get user by token
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        handleEnterToSystem(state, action);
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        handleErrorCase(state, action);
      });
  },
});

export const { reducer, actions } = authSlice;
