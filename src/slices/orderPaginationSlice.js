import { createSlice } from "@reduxjs/toolkit";
import { getOrder, getProductPagination } from "../actions/orderAction";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrder.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    [getOrder.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getProductPagination.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getProductPagination.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    [getProductPagination.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default orderSlice.reducer;
