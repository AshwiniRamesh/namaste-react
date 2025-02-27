import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import themReducer from "./themSlice";

const appStore = configureStore({
  reducer: { // one reducer for entire application
    //we can import n number here
    cart: cartReducer,
    themes: themReducer
  },
});

export default appStore;
