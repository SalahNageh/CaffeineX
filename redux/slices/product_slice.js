import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

export const updateDrinks = createAsyncThunk(
  "products/updateDrinks",
  async (searchQuery) => {
    try {
      const snapshot = await getDocs(collection(database, "Drinks"));
      const drinksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filteredDrinks = drinksData.filter((drink) =>
        drink.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return filteredDrinks;
    } catch (error) {
      console.error("Error updating drinks:", error);
    }
  }
);

export const updateBeans = createAsyncThunk(
  "products/updateBeans",
  async (searchQuery) => {
    try {
      const snapshot = await getDocs(collection(database, "Beans"));
      const beansData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filteredBeans = beansData.filter((bean) =>
        bean.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return filteredBeans;
    } catch (error) {
      console.error("Error updating Beans:", error);
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
    filteredDrinks: [],
    selectedCategory: "All",
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      if (action.payload != "All") {
        state.filteredDrinks = state.drinks.filter(
          (drink) => drink.category === action.payload
        );
      } else {
        state.filteredDrinks = state.drinks;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchDrinks.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchDrinks.fulfilled, (state, action) => {
      state.loading = false;
      state.drinks = action.payload;
      state.filteredDrinks = action.payload;
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
    builder.addCase(updateDrinks.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateDrinks.fulfilled, (state, action) => {
      state.loading = false;
      state.drinks = action.payload;
      state.filteredDrinks = action.payload;
    });
    builder.addCase(updateDrinks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateBeans.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateBeans.fulfilled, (state, action) => {
      state.loading = false;
      state.beans = action.payload;
    });
    builder.addCase(updateBeans.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const { setSelectedCategory } = productSlice.actions;

export default productSlice.reducer;
