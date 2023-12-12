import { createSlice } from "@reduxjs/toolkit/react";

const initialState = { theme: "light" };

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialState },
  reducers: {
    toggle: (state) => {
      state.value = { theme: state.value.theme == "light" ? "dark" : "light" };
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
