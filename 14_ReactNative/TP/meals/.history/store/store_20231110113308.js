import { configureStore } from "@reduxjs/toolkit";

export default const store = configureStore({
    reducer : {
        meal : mealSlice,
    }
})