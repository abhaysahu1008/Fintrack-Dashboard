import { createSlice } from "@reduxjs/toolkit";

const getTheme = () => {
  return localStorage.getItem("theme") || "dark";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: getTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
