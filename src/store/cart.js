import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item, index) => item.id !== action.payload);
    },
    clear: (state) => {
      state.cart = []
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;