// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (existingProduct) {
        state.totalAmount -= existingProduct.price * existingProduct.quantity;
        state.items = state.items.filter(
          (item) => item.name !== action.payload.name
        );
      }
    },
    changeQuantity: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (existingProduct) {
        state.totalAmount +=
          (action.payload.quantity - existingProduct.quantity) *
          existingProduct.price;
        existingProduct.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
