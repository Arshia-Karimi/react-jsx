import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userName: "" },
  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName;
    },
    logout: (state) => {
      state.userName = "";
    },
  },
});
export const { login, logout } = userSlice.actions;
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
