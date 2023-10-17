import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        authMode :"Se connecter",
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removerUser: (state, action) => {
            state.user = null; //n'est pas connecté
            localStorage.removeItem("token");
        },
        setAuthMode: (state, action) => {
            state.authMode = action.payload;
        }
    }

   
})

export const { setUser, removerUser, setAuthMode } = authSlice.actions;
export default authSlice.reducer;
