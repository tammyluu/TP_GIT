import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { BASE_DB_URL } from '../../firebaseConfig'



export const fetchAlbum = createAsyncThunk (
    'albumItems/fetchAlbum',
    async () => {
        const response = await fetch(BASE_DB_URL + "/eAlbums.json")
        const data = await response.json()
        const albums =[]
        for (const key in data) {
            albums.push({id: key, ...data[key]})
        }
        return albums
    }
)
export const postAlbums = createAsyncThunk (
    'albumItems/postAlbums',
    async (newAlbum) => {
        const token = localStorage.getItem("token")
        const response = await fetch(BASE_DB_URL + `/eAlbums.json?auth=${token}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify(newAlbum)
        })
        const data = await response.json()
        return {
            id: data.title,
          ...newAlbum
        }
    }
)
const albumSlice = createSlice({
    name: "albumItems",
    initialState: {
        formMode: "",
        albums: [],
        selectedAlbums: null
    },
    reducers: {
        setFormMode: (state, action) => {
            state.formMode = action.payload
            console.log(action.payload);
        },
         setSelectedAlbum: (state, action) => {
            state.selectedAlbums = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlbum.fulfilled, (state, action) => {
            state.albums = action.payload
            console.log(state.albums)
        })
        builder.addCase(postAlbums.fulfilled, (state, action) => {
            state.albums.push(action.payload)
            console.log(action.payload);
        })
    }
})
export default albumSlice.reducer
export const { setFormMode , setSelectedAlbum} = albumSlice.actions