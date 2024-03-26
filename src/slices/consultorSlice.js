import { createSlice } from "@reduxjs/toolkit";
import {
  addTerapeuta,
  updateProfile,
  getConsultor,
} from "../actions/ConsultorAction";

export const initialState = {
  terapeuta: null, // Cambiado a objeto único en lugar de array
  loading: false,
  error: null,
};

export const terapeutaSlice = createSlice({
  name: "terapeuta",
  initialState,
  reducers: {
    resetUpdateStatus: (state, action) => {
      state.isUpdated = false;
    },
  },
  extraReducers: {
    [addTerapeuta.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addTerapeuta.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.terapeuta = payload.data; // Cambiado de products a terapeuta
      state.error = null;
    },
    [addTerapeuta.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateProfile.pending]: (state) => {
      state.loading = true;
      state.errores = [];
    },
    [updateProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.terapeuta = payload; // Cambiado de user a terapeuta
      state.errores = [];
      state.isAuthenticated = true;
      state.isUpdated = true;
    },
    [updateProfile.rejected]: (state, action) => {
      state.loading = false;
      state.errores = action.payload;
      state.isAuthenticated = false;
      state.terapeuta = null; // Restablecer terapeuta a null en caso de error
    },
    [getConsultor.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getConsultor.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.countries = payload;
    },
    [getConsultor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const terapeutaReducer = terapeutaSlice.reducer;
