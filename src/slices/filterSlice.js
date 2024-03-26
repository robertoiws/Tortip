// filterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    city: null,
    popularity: null,
    searchTerm: "",
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setPopularity: (state, action) => {
      state.popularity = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    // Agrega más reducers según sea necesario
  },
});

export const { setCity, setPopularity, setSearchTerm } = filterSlice.actions;
export default filterSlice.reducer;
