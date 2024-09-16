import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

interface Cart {
  items: Item[]; // todo a type of object
}

const initialState: Cart = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.items.push(action.payload);
    },
    decrement: (state, action) => {
      console.log(action);
      state.items = state.items.filter((i) => i.id !== action.payload); //DELETE MULTIPLE, IF THERE IS ITEMS WITH THE SAME ID
    },
    reset: (state) => {
      state.items = [];
    },
  },
});

export const { increment, decrement, reset } = cartSlice.actions;
export default cartSlice.reducer;
