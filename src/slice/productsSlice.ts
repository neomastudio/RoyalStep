import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import productsData from "../data/products.json";

export interface product {
  id: number;
  category: string;
  title: string;
  price: number;
  img: string;
  colors: string[];
  sizes: number[];
  stock: number;
}

interface productsState {
  items: product[];
  selectedItem: string | null;
}

const initialState: productsState = {
  items: productsData,
  selectedItem: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<string>) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
