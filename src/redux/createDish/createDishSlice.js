import { createDish, updateDish } from "@/api";
import { dishFormDefaultValues } from "@/constants/defaultValues";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  dishFormData: dishFormDefaultValues,
  currentStep: 1,
  loading: false,
  error: null,
  success: false,
  editMode: false,
};

export const submitDishData = createAsyncThunk(
  "createDish/submitDishData",
  async (dishData, thunkAPI) => {
    try {
      const response = await createDish(dishData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const updateDishData = createAsyncThunk(
  "createDish/updateDishData",
  async ({ dishId, dishData }, thunkAPI) => {
    try {
      const response = await updateDish(dishId, dishData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const createDishSlice = createSlice({
  name: "createDish",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.dishFormData = {
        ...state.dishFormData,
        ...structuredClone(action.payload),
      };
    },
    updateCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    resetFormData: (state) => {
      state.dishFormData = initialState.dishFormData;
      state.currentStep = initialState.currentStep;
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitDishData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitDishData.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        console.log("Submit successful:", action.payload);

        state.dishFormData = initialState.dishFormData;
        state.currentStep = initialState.currentStep;
      })
      .addCase(submitDishData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Submit failed:", action.payload);
      })
      .addCase(updateDishData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateDishData.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        console.log("Update successful:", action.payload);
      })
      .addCase(updateDishData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Update failed:", action.payload);
      });
  },
});

export const { updateFormData, updateCurrentStep, resetFormData } =
  createDishSlice.actions;

export default createDishSlice.reducer;
