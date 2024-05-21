import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

export const updateBeans = createAsyncThunk(
  "products/updateBeans",
  async (data) => {
    try {
      const { id, ...rest } = data;
      await setDoc(doc(database, "Beans", id), rest);
      return { id, ...rest };
    } catch (error) {
      console.error("Error updating beans:", error);
    }
  }
);
export const fetchDrinks = createAsyncThunk(
  "products/fetchDrinks",
  async () => {
    try {
      const snapshot = await getDocs(collection(database, "Drinks"));
      const drinksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return drinksData;
    } catch (error) {
      console.error("Error fetching drinks:", error);
    }
  }
);

export const fetchBeans = createAsyncThunk("products/fetchBeans", async () => {
  try {
    const snapshot = await getDocs(collection(database, "Beans"));
    const drinksData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return drinksData;
  } catch (error) {
    console.error("Error fetching drinks:", error);
  }
});
const productSlice = createSlice({
  name: "products",
  initialState: {
    drinks: [],
    beans: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDrinks.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchDrinks.fulfilled, (state, action) => {
      state.loading = false;
      state.drinks = action.payload;
    });
    builder.addCase(fetchDrinks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchBeans.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchBeans.fulfilled, (state, action) => {
      state.loading = false;
      state.beans = action.payload;
    });
    builder.addCase(fetchBeans.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(addDrinks.fulfilled, (state, action) => {
      state.drinks.push(action.payload);
    });
  },
});
export default productSlice.reducer;
