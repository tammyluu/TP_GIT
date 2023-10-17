import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/authSlice";
import taskSlice from "./components/task/TaskSlice";


export default configureStore ({
    reducer: {
        auth: authSlice,
        task: taskSlice

    }
})