import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";
alb

const store = configureStore({
    reducer: {
        auth: authSlice,
        albums: 
        
    }
})

export default store