import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Order {
  id: number;
  title: string;
  img: string;
  color: string;
  size: number;
  price: number;
  quantity: number;
  stock: number;
  status: "pending" | "processing" | "paid";
}

interface OrderState {
  items: Order[];
}

const savedOrder = localStorage.getItem("order");

const initialState: OrderState = {
  items: savedOrder ? JSON.parse(savedOrder) : [],
};

const orderSlice = createSlice({
    name : "order",
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<Order[]>) => {
            state.items = action.payload;
        },
        waiting: (state, action: PayloadAction<"pending" | "processing" | "paid">) => {
          state.items.forEach((item) => {
            item.status = action.payload;
          })
        },
        setStatus: (state) => {
          state.items.forEach((item) => {
            item.status = "paid";
          })
        }
    }
})

export const { setOrder, setStatus, waiting } = orderSlice.actions;
export default orderSlice.reducer;