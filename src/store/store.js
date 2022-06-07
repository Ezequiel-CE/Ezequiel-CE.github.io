import { configureStore } from "@reduxjs/toolkit";
import { languageReducer, loadReducer } from "./slices";

export const store = configureStore({
  reducer: { language: languageReducer, load: loadReducer },
});
