import { createSlice } from "@reduxjs/toolkit";
import { addRecursosWeb } from "../actions/recursosAction";

export const initialState = {
  recursosWeb: [],
  loading: false,
  error: null,
};
export const recursosSlice = createSlice({
  name: "recursosWeb",
  initialState,
  reducers: {},
  extraReducers: {
    [addRecursosWeb.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addRecursosWeb.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // Agregar el nuevo producto al estado actual
      state.products = [...state.tipoServicio, payload.data];
      state.error = null;
    },
    [addRecursosWeb.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const ServicioReducer = ServicioSlice.reducer;
