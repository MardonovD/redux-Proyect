import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { data: 0 },
  reducers: {
    increment: (state, action) => {
      state.data += 1;
    },
    decrement: (state, action) => {
      state.data -= 1;
    },
  },
});

export default counterSlice.reducer;
