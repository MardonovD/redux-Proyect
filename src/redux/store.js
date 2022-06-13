import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: "counter",
    student: "student",
  },
});
