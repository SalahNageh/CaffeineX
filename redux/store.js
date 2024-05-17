import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/category_slice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
  },
});

export default store;
