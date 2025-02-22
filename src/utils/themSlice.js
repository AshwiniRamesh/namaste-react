import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "cart",
  initialState: {
    darkTheme: false,
    whiteTheme: true
  },
  reducers: {
    darkTheme: (state) => {
      state.darkTheme = true;
      state.whiteTheme = false
    },
    // darkTheme is the action
    //its value is the reducer function
    whiteTheme: (state) => {
      state.whiteTheme = true;
      state.darkTheme = false;
    }
  },
});

export const { darkTheme, whiteTheme }= themeSlice.actions;
export default themeSlice.reducer;
