import { configureStore } from "@reduxjs/toolkit"
import TaskSlice from "./components/TaskSlice"
// ici nous ressemblons toutes les slices
export default configureStore ({
    reducer: {
        task : TaskSlice,
        //Possibilité d'importer d'autres reducers
        
    }
})