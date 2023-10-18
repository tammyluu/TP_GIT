import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";
import albumItemsSlice from "./components/album/albumItemsSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        albums: albumItemsSlice
        
    }
})

export default store