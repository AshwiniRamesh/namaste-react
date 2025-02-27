import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: { // multiple reducers 
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    // addItem is the action
    //its value is the reducer function
    clearCart: (state) => {
      state.items.length = 0;
    },
    removeItem: (state) => {
      state.items.pop();
    },
  },
});

export const {addItem, clearCart, removeItem}= cartSlice.actions;
export default cartSlice.reducer; // we are exporting only one here
