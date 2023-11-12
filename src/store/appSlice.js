import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoading: true,
    search: "",
    error: "",
    message: "",
    fullLKist: [],
    filteredList: [],
    currentLang: "en",

    /** AUTH **/
    isAuth: false,
    auth: {},
  },
  reducers: {},
});

export const {} = appSlice.actions;

export default appSlice.reducer;
