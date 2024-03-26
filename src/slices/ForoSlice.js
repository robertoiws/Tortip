import { createSlice } from "@reduxjs/toolkit";
import { addPreguntaleAbue } from "../actions/ServiciosForo";

export const initialState = {
  foroSlice: [],
  loading: false,
  error: null,
};
export const ForoSlice = createSlice({
  name: "tipoServicio",
  initialState,
  reducers: {},
  extraReducers: {
    [addPreguntaleAbue.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addPreguntaleAbue.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // Agregar el nuevo producto al estado actual
      state.products = [...state.tipoServicio, payload.data];
      state.error = null;
    },
    [addPreguntaleAbue.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const ForoReducer = ForoSlice.reducer;
