import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import themReducer from "./themSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    themes: themReducer
  },
});

export default appStore;
