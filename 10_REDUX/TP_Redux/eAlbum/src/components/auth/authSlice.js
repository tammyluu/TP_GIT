import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SIGN_IN_URL, SIGN_UP_URL } from '../../firebaseConfig';




export const postSetUserSignIn = createAsyncThunk(
    "auth/postSetUserSignIn",
    async (credentials) => {
        const response = await fetch(SIGN_IN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        console.log(data);

        localStorage.setItem("token", data.idToken)
        return credentials
    })

export const postSetUserSignUp = createAsyncThunk(
    "auth/postSetUserSignUp",
    async (credentials) => {
        const response = await fetch(SIGN_UP_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        if (!response.ok) {
            throw new Error("Something went wrong during the ")
        }

        const data = await response.json()
        console.log(data);

        localStorage.setItem("token", data.idToken)
        return {
            credentials

        }
    })



const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        authMode: "Sign In",
    },
    reducers: {
        setAuthMode: (state, action) => {
            state.authMode = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postSetUserSignIn.fulfilled, (state, action) => {
            state.user = action.payload
            console.log(state.user);
        })
        builder.addCase(postSetUserSignUp.fulfilled, (state, action) => {
            state.authMode = action.payload
            console.log(state.authMode);
        })



    }


})
export const { setUser, removeUser, setAuthMode } = authSlice.actions
export default authSlice.reducer