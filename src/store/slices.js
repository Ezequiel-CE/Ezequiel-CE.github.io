import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "Language",
  initialState: {
    language: "ing",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
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

// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSlice.actions;
export const { finishLoad } = loadSlice.actions;

export const languageReducer = languageSlice.reducer;
export const loadReducer = loadSlice.reducer;
