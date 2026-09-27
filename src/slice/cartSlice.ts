import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface Cart {
  id: number;
  title: string;
  img: string;
  color: string;
  size: number;
  price: number;
  quantity: number;
  stock: number;
}

interface CartState {
  items: Cart[];
}

const savedCarts = localStorage.getItem("cart");

const initialState: CartState = {
  items: savedCarts ? JSON.parse(savedCarts) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      const product = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size,
      );
      if (product) {
        product.quantity++;
      } else {
        state.items.push(action.payload);
      }
    },
    increaseQuantity: (
      state,
      action: PayloadAction<{ id: number; color: string; size: number }>,
    ) => {
      const product = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size,
      );
      if (!product) return;
      if (product.quantity < product.stock) {
        product.quantity++;
      } else {
        toast.info("Maximum available stock reached.");
      }
    },
    decreaseQuantity: (
      state,
      action: PayloadAction<{ id: number; color: string; size: number }>,
    ) => {
      const product = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size,
      );
      if (!product) return;
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        const index = state.items.findIndex(
          (item) =>
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size,
        );
        if (index !== -1) {
          state.items.splice(index, 1);
          toast.info("Item removed from cart.");
        }
      }
    },
    removeQuantity: (
      state,
      action: PayloadAction<{ id: number; color: string; size: number }>,
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          ),
      );
      toast.success("Item removed from cart.");
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
