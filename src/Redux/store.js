import { configureStore } from "@reduxjs/toolkit";
import { systemReducer } from "./slice/System.slice.js";

const store = configureStore({
  reducer: {
    system: systemReducer,
    },
  devTools: false
});
export default store;
