import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/category_slice";
import productSlice from "./slices/product_slice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
  },
});

export default store;
