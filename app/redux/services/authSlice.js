import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  token: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLogin: (state, action) => {
      state.isLogin = action.payload.isLogin;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { toggleLogin } = authSlice.actions;
export default authSlice.reducer;
