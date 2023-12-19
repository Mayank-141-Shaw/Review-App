import { createSlice } from "@reduxjs/toolkit/react";
import { EventItem } from "../class/EventItem";

const initialState = [
  JSON.stringify(
    new EventItem(
      1,
      "Revise Node.js interceptor",
      "node js connections",
      Date.now().toString(),
      Date.now().toString()
    )
  ),
];

export const eventSlice = createSlice({
  name: "event",
  initialState: { value: initialState },
  reducers: {
    addNewEvent: (state, action) => {
      const data = JSON.parse(action.payload);
      state.value = [...state.value, data];
    },
    updateEventById: (state, action) => {
      const data = JSON.parse(action.payload);
      const ind = state.value.findIndex(
        (item) => JSON.parse(item).id === data.id
      );
      state.value[ind] = JSON.stringify(data);
    },
    deleteEventById: (state, action) => {
      state.value = [
        ...state.value.filter(
          (item) => JSON.parse(item).id !== action.payload.id
        ),
      ];
    },
  },
});

export const { addNewEvent, deleteEventById, updateEventById } =
  eventSlice.actions;
export default eventSlice.reducer;
