import { createSlice } from "@reduxjs/toolkit/react";

const initialState: EventItem[] = [];

export const eventSlice = createSlice({
  name: "event",
  initialState: { value: initialState },
  reducers: {
    addNewEvent: (state, action) => {
      const data = action.payload;
      state.value = [
        ...state.value,
        new EventItem(data.id, data.title, data.desc, data.start, data.end),
      ];
    },
    deleteEventById: (state, action) => {
      state.value = [
        ...state.value.filter((item) => item.id !== action.payload.id),
      ];
    },
  },
});

export const { addNewEvent, deleteEventById } = eventSlice.actions;
export default eventSlice.reducer;