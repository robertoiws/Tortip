import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  addProduct,
  updateProduct,
} from "../actions/productsAction";

export const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload.data;
      state.error = null;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [addProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // Agregar el nuevo producto al estado actual
      state.products = [...state.products, payload.data];
      state.error = null;
    },
    [addProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateProduct.pending]: (state) => {
      state.loading = true;
      state.errores = [];
    },
    [updateProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.errores = [];
      state.isAuthenticated = true;
      state.isUpdated = true;
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
      state.errores = action.payload;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});
export const productsReducer = productsSlice.reducer;
