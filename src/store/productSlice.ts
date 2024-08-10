import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  success: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload.data;
      state.success = true;
    },
    getProductsByCategory: (state, action) => {
      state.products = action.payload.data;
      state.success = true;
    },
  },
});

export const { getAllProducts, getProductsByCategory } = productSlice.actions;

export default productSlice.reducer;
