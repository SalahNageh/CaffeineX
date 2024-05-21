import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product_slice";

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store;
