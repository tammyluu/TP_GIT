import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";
import albumItemsslice from "./components/album/albumItemsslice";


const store = configureStore({
    reducer: {
        auth: authSlice,
        albums: 
        
    }
})

export default store