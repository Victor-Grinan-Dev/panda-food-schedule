import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoading: true,
    search: "",
    error: "",
    message: "",
    filteredList: [],
    currentLang: "en",

    /** AUTH **/
    isAuth: false,
    auth: {},
  },
  reducers: {
    startIsLoadingg(state){
      state.isLoading = true;
    },

    endIsLoading(state){
      state.isLoading = false;
    },

    setError(state, payload){
      state.error = payload;
    },

    setMessage(state, payload){
      state.message = payload;
    },

    /** AUTH **/
    setIsAuthTrue(state){
      state.isAuth=true
    },

    setIsAuthFalse(state){
      state.isAuth=false
    },

    setAuth(state, payload){
      state.auth = payload
    },
    
  },
});

export const {
  startIsLoadingg,
    endIsLoading,
    setError,
    setMessage,
    setIsAuthTrue,
    setIsAuthFalse,
    setAuth,
} = appSlice.actions;

export default appSlice.reducer;
