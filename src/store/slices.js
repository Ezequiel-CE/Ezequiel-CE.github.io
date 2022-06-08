import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "Language",
  initialState: {
    currentLanguage: "ing",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const loadSlice = createSlice({
  name: "Load",
  initialState: {
    load: true,
  },
  reducers: {
    finishLoad: (state) => {
      state.load = false;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export const { finishLoad } = loadSlice.actions;

export const languageReducer = languageSlice.reducer;
export const loadReducer = loadSlice.reducer;
