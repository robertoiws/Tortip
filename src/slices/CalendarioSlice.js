import { createSlice } from "@reduxjs/toolkit";
import { AddCalendarioServicio } from "../actions/Calendario";

export const initialState = {
  recursosWeb: [],
  loading: false,
  error: null,
};
export const CalendarioServicioSlice = createSlice({
  name: "CalendarioServicio",
  initialState,
  reducers: {},
  extraReducers: {
    [AddCalendarioServicio.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [AddCalendarioServicio.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // Agregar el nuevo producto al estado actual
      state.products = [...state.AddCalendarioServicio, payload.data];
      state.error = null;
    },
    [AddCalendarioServicio.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const CalendarioServicioReducer = CalendarioServicioSlice.reducer;
