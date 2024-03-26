import { createSlice } from "@reduxjs/toolkit";
import {
  addTipoServicio,
  updateTipoServicio,
  getTiposervicios,
} from "../actions/servicioActions";

export const initialState = {
  tipoServicio: [],
  loading: false,
  error: null,
};
export const tipoServicioSlice = createSlice({
  name: "tipoServicio",
  initialState,
  reducers: {},
  extraReducers: {
    [updateTipoServicio.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateTipoServicio.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // Actualiza el tipoServicio existente con los nuevos datos
      const index = state.tipoServicio.findIndex(
        (tipo) => tipo.id === payload.id
      );
      state.tipoServicio[index] = payload;
      state.error = null;
    },
    [updateTipoServicio.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [addTipoServicio.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addTipoServicio.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // Agregar el nuevo producto al estado actual
      state.products = [...state.tipoServicio, payload.data];
      state.error = null;
    },
    [addTipoServicio.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getTiposervicios.pending.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getTiposervicios.fulfilled]: (state, action) => {
      state.loading = false;
      state.tipoServicio = action.payload;
      state.error = null;
    },
    [getTiposervicios.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const tipoServicioReducer = tipoServicioSlice.reducer;
