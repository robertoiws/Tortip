import { createSlice } from "@reduxjs/toolkit";
import {
  addServicio,
  updateServicio,
  getServicio,
} from "../actions/addServicioAction";

export const initialState = {
  tipoServicio: [],
  loading: false,
  error: null,
};
export const ServicioSlice = createSlice({
  name: "tipoServicio",
  initialState,
  reducers: {},
  extraReducers: {
    [updateServicio.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateServicio.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // Actualiza el tipoServicio existente con los nuevos datos
      const index = state.tipoServicio.findIndex(
        (tipo) => tipo.id === payload.id
      );
      state.tipoServicio[index] = payload;
      state.error = null;
    },
    [updateServicio.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [addServicio.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addServicio.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // Agregar el nuevo producto al estado actual
      state.products = [...state.tipoServicio, payload.data];
      state.error = null;
    },
    [addServicio.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getServicio.pending.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getServicio.fulfilled]: (state, action) => {
      state.loading = false;
      state.tipoServicio = action.payload;
      state.error = null;
    },
    [getServicio.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const ServicioReducer = ServicioSlice.reducer;
