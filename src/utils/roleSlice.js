import { createSlice } from "@reduxjs/toolkit";

const getInitialRole = () => {
  const storedRole = localStorage.getItem("role");
  return storedRole ? storedRole : "Admin";
};

const roleSlice = createSlice({
  name: "role",
  initialState: {
    role: getInitialRole(),
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
      localStorage.setItem("role", action.payload);
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
