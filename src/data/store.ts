import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    event: eventReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
