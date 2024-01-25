import { privateInstance, publicInstance } from "@/api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await publicInstance.post(
        `/api/auth/login`,
        { email, password },
        config,
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await privateInstance.post(`/api/auth/logout`, config);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await publicInstance.post(
        `/api/auth/signup`,
        { firstName, lastName, email, password },
        config,
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await privateInstance.get("/api/user/current");

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
