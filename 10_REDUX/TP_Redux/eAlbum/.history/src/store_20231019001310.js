import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        albums: albumSlice
        
    }
})

export default store