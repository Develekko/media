import {createSlice } from "@reduxjs/toolkit";
const systemSlice = createSlice({
  name: "system",
  initialState: {
    isVideoLoaded: false,
  },
  reducers: {
    videoLoaded:(state,action)=>{
      state.isVideoLoaded = action.payload
    }
  },
});
export const { videoLoaded } = systemSlice.actions;
export const systemReducer = systemSlice.reducer;