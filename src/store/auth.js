import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false }

const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    login: state => {
      state.isLoggedIn = true
    },
    logout: state => {
      state.isLoggedIn = false
    }
  } 
});

export const authActions = authSlice.actions;
export default authSlice.reducer;